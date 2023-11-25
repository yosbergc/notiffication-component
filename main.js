const notificationContainer = document.querySelector('.notifications-container');
const notificationNumber = document.querySelector('.notificationsSpan');
const markButton = document.querySelector('.markallbutton');
const notificationsSelection = document.querySelectorAll('.notification');

markButton.addEventListener('click', AllViewed);
window.addEventListener('load', checkActiveQuantity);

notificationsSelection.forEach((notification) => {
    notification.addEventListener('click', () => {
        notification.classList.remove('active');
        checkActiveQuantity();
    })
})
function checkActiveQuantity() {
    let numberActive = notificationContainer.children.length;
    let quantity = 0;
    for (let i = 0; i < numberActive; i++) {
        if (notificationContainer.children.item(i).classList.contains('active')) {
            quantity = quantity + 1;
        }
    }
    notificationNumber.innerHTML = quantity;
}
function AllViewed() {
    let numberActive = notificationContainer.children.length;
    for (let i = 0; i < numberActive; i++) {
        notificationContainer.children.item(i).classList.remove('active');
    }
    checkActiveQuantity();
}