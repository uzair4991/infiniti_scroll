function helper(element,attribute){
    for(const key in attribute){
        element.setAttribute(key, attribute[key])
    }

}
const imgContainer= document.getElementById('img_container');


    let arrayApi=[];

    const count=30;
    const apikey='9c3c4a37b8a149ff60d79fe6b02997c3ec1a15ee62e48ffa0d9eb29296798162';
    const api=`https://api.unsplash.com/photos/random/?client_id=${apikey}&count=${count}`;
 
   function displayPhoto(){
    arrayApi.forEach((photo)=>{
        const a=document.createElement('a');
        helper(a,{
            href:photo.links.html,
            target:'_blank',
        });
        //a.setAttribute('href',photo.links.html);
        //a.setAttribute('target','_blank');

        const img=document.createElement('img');
        helper(img,{
            title:photo.alt_description,
            src:photo.urls.regular,
            alt:photo.alt_description,
        });
        //img.setAttribute('src',photo.urls.regular);
        //img.setAttribute('title',photo.alt_description);
        //img.setAttribute('alt',photo.alt_description);

        a.appendChild(img);
        imgContainer.appendChild(a);

    });

    }

async function apiFetch(){ 
    try{
    const getdata= await fetch(api);
     arrayApi= await getdata.json();
     console.log(arrayApi);
      displayPhoto();   
    }
    catch(err){
        console.log(err);
    }
}


window.addEventListener('scroll',()=>{
    if(window.innerHeight+scrollY >=document.body.offsetHeight-1000){
        apiFetch();
    }
})
apiFetch();