const reviewsArr=[{
    id:1,
    name:'Abbas',
    role:'Software Engineer',
    imgurl:'images//eddy-lackmann-lLdGG3ESoiI-unsplash.jpg',
    reviewText:'beucbuiui loremreader will be distracted by the readable its layout.Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, totam! Maiores harum expedita consequatur sint repudiandae excepturi ullam asperiores, porro rerum vel autem laborum nulla laudantium quidem debitis magni nesciunt'
},
{
    id:2,
    name:'Ahmed',
    role:'Software Researcher',
    imgurl:'images//europeana-00SzLJ6yQOk-unsplash.jpg',
    reviewText:'beucbuiui loremreader will be distracted by the readable its layout.Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, totam! Maiores harum expedita consequatur sint repudiandae excepturi ullam asperiores, porro rerum vel autem laborum nulla laudantium quidem debitis magni nesciunt'
},{
    id:3,
    name:'Lisa',
    role:'Data Engineer',
    imgurl:'images//everton-vila-AsahNlC0VhQ-unsplash.jpg',
    reviewText:'beucbuiui loremreader will be distracted by the readable its layout.Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, totam! Maiores harum expedita consequatur sint repudiandae excepturi ullam asperiores, porro rerum vel autem laborum nulla laudantium quidem debitis magni nesciunt'
},{
    id:4,
    name:'Scarlet',
    role:'Analysis Engineer',
    imgurl:'images//nadine-burzler-FsXq3xu72bs-unsplash.jpg',
    reviewText:'beucbuiui loremreader will be distracted by the readable its layout.Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, totam! Maiores harum expedita consequatur sint repudiandae excepturi ullam asperiores, porro rerum vel autem laborum nulla laudantium quidem debitis magni nesciunt'
},{
    id:5,
    name:'Jhonson',
    role:'Software Tester',
    imgurl:'images/shuttergames-9BE8hiqvUM4-unsplash.jpg',
    reviewText:'beucbuiui loremreader will be distracted by the readable its layout.Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, totam! Maiores harum expedita consequatur sint repudiandae excepturi ullam asperiores, porro rerum vel autem laborum nulla laudantium quidem debitis magni nesciunt'
},
{
    id:6,
    name:'Abdnwdj',
    role:'Software Developer',
    imgurl:'//c2.staticflickr.com/8/7310/buddyicons/24846422@N06_r.jpg',
    reviewText:'beucbuiui loremreader will be distracted by the readable its layout.Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, totam! Maiores harum expedita consequatur sint repudiandae excepturi ullam asperiores, porro rerum vel autem laborum nulla laudantium quidem debitis magni nesciunt'
},]
document.addEventListener('DOMContentLoaded',function() {
    let currentReview=-1;
    let prevbutton=document.querySelector('button.previous');
    let nextbutton=document.querySelector('button.next');
    prevbutton.addEventListener('click',moveBackWard);
    nextbutton.addEventListener('click',moveForward);
    function moveBackWard(){
        currentReview<=0?currentReview=reviewsArr.length-1: currentReview--;
        renderNewReview(reviewsArr[currentReview]);
    }
    function moveForward(){
        currentReview>=reviewsArr.length-1?currentReview=0: currentReview++;
        renderNewReview(reviewsArr[currentReview]);
    }

    function renderNewReview(newReviewData) {
        document.querySelector('img').src=newReviewData.imgurl;
        document.querySelector('.customer-name').innerHTML=newReviewData.name;
        document.querySelector('.role-name').innerHTML=newReviewData.role;
        document.querySelector('p').innerHTML=newReviewData.reviewText;
    }
});