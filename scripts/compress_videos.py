import os
import subprocess
import imageio_ffmpeg

ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()
public_dir = os.path.abspath("public")

videos = [
    "Record_2026-05-28-14-40-29.mp4",
    "Record_2026-05-28-14-45-33.mp4",
    "VID20260529105202.mp4",
]

for vid in videos:
    input_path = os.path.join(public_dir, vid)
    temp_path = os.path.join(public_dir, f"compressed_{vid}")
    
    if not os.path.exists(input_path):
        print(f"File not found: {input_path}")
        continue
        
    orig_size_mb = os.path.getsize(input_path) / (1024 * 1024)
    print(f"\nProcessing {vid} (Original: {orig_size_mb:.2f} MB)...")
    
    # CRF 26 + faststart web optimization + AAC audio
    cmd = [
        ffmpeg_exe,
        "-y",
        "-i", input_path,
        "-c:v", "libx264",
        "-crf", "26",
        "-preset", "fast",
        "-c:a", "aac",
        "-b:a", "128k",
        "-movflags", "+faststart",
        temp_path
    ]
    
    res = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    if res.returncode != 0:
        print(f"Error compressing {vid}: {res.stderr.decode('utf-8', errors='ignore')[:300]}")
        if os.path.exists(temp_path):
            os.remove(temp_path)
        continue
        
    new_size_mb = os.path.getsize(temp_path) / (1024 * 1024)
    print(f"Successfully compressed {vid}: {orig_size_mb:.2f} MB -> {new_size_mb:.2f} MB")
    
    # Replace original with compressed version
    os.replace(temp_path, input_path)
    print(f"Replaced {vid} with compressed version.")

print("\nAll videos compressed and ready for GitHub!")
