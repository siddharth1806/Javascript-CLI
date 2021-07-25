let types = {
    media: ["mp3", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb","class"]
}
let fs=require("fs");
let path=require("path");
function org(paths)
{
    let isdirectory=fs.lstatSync(paths).isDirectory();
    if(isdirectory)
    {
         console.log("is directory");
         let org=path.join(paths,"organize");
         fs.mkdirSync(org);
         let m=path.join(org,"Media");
        fs.mkdirSync(m);
        let a=path.join(org,"archives");
        fs.mkdirSync(a)
        let d=path.join(org,"document");
        fs.mkdirSync(d);
        let ap=path.join(org,"app");
        fs.mkdirSync(ap);
         fs.readdirSync(paths).forEach(file=>
                                       { 

           let extName=path.extname(file);

           let e=extName.slice(1);
           //  .  is removed in the extensions 

           types.media.forEach(ele=>{  //if media extentions match the file extention 
               if(ele===e)  
               {

                let ma = m+"/"+file;
                let pa=paths+"/"+file;
               fs.copyFileSync(pa,ma);
               //then file is stored in media folder// 
            
               }
           })

           types.archives.forEach(ele=>{
            if(ele===e)
            {
        
             let ma = a+"/"+file;
             let pa=paths+"/"+file;
            fs.copyFileSync(pa,ma);

            }
        })

        types.documents.forEach(ele=>{
            if(ele===e)
            {
        
             let ma = d+"/"+file;
             let pa=paths+"/"+file;
            fs.copyFileSync(pa,ma);
         
            }
        })

        types.app.forEach(ele=>{
            if(ele===e)
            {
        
             let ma = ap+"/"+file;
             let pa=paths+"/"+file;
            fs.copyFileSync(pa,ma);
            }
        })
       })
       

    }
    else
    {
        console.log("Directory");
    }
}
module.exports={
    fxn:org
}
