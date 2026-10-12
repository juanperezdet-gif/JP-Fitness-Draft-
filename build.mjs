import { mkdir, copyFile, cp, rm } from "node:fs/promises";
const files=["index.html","styles.css","app.js","manifest.webmanifest","icon.svg","sw.js","vercel.json"];
await rm("dist",{recursive:true,force:true}); await mkdir("dist",{recursive:true});
for(const file of files) await copyFile(file,`dist/${file}`);
await cp("videos","dist/videos",{recursive:true});
await cp("images","dist/images",{recursive:true});
console.log("JP Fitness 6.0 build complete");
