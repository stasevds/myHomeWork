const arrayPathImages = ['https://avatars.mds.yandex.net/i?id=fd50415fb937811fd3016269400efd03-4568591-images-thumbs&n=13',
'https://avatars.mds.yandex.net/i?id=b541d65f869d0c39a3d46e3f8b3d5aa0_sr-4837951-images-thumbs&n=13',
'https://avatars.mds.yandex.net/i?id=0eb1a8549f849cb6a3667549caefd9bf_sr-8210460-images-thumbs&n=13'];

function loadImagesOnForm (array){

    const ul = document.createElement('ul');
    ul.classList.add('main_container');

    array.forEach(el => {
    let li = document.createElement('li');
    let img = document.createElement('img');
    
    img.classList.add('photo');
    img.src = el;
    img.alt = `Image is not loading`;
    img.style.width = '300px'; 
        
    li.append(img);
    ul.append(li)
    });

    document.body.append(ul);
}
loadImagesOnForm (arrayPathImages)


const myUl = document.querySelector('.main_container');
const linkImage = document.createElement('a');
const divParagraph = document.createElement('p');

myUl.addEventListener('click', function (event) {

	if (event.target.classList.value === 'photo') {

		linkImage.href = event.target.src;
		linkImage.textContent = 'Ссылка на картинку';
        linkImage.target = '_blank';
		
        event.target.after(divParagraph);
		divParagraph.append(linkImage);

	};
});