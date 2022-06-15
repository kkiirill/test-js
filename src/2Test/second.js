const product_option_value = [
  {
    "option_image_popup": 'https://topor.od.ua/wp-content/uploads/2020/11/ukrpochta.jpg',
    "option_image_thumb": 'https://img.pravda.com/images/doc/e/7/e79eb2e-marka-korabl.jpg'
  },
]
 
const input1 = document.querySelector('#contactChoice1');
const input2 = document.querySelector('#contactChoice2');
document.querySelector(".image").src=`${product_option_value[0].option_image_popup}`;

for (let i = 0; i < product_option_value.length; i++) {
  input1.setAttribute('value', product_option_value[i].option_image_popup);
  input2.setAttribute('value', product_option_value[i].option_image_thumb);
}

$('input[type="radio"]').click(function() {
  document.querySelector(".image").src=`${this.value}`;
});
  