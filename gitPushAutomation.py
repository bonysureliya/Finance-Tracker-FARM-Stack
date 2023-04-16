import os 
# commit message here
commitMessage : str  = input("Commit message : ")
os.system(f'git add . && git commit -m "{commitMessage}" && git push origin main && git pull origin main')