## Dailydrink

# In this project directory, you can run:
### `yarn start`

# Folder Structure:
dailydrink (project)

    .
    ├── ..
    ├── public                 
    │   ├── index.html          
    │   └── assetes          
    │          └── images                  
    │                         
    |   
    ├── src                            
    │   ├── app.css
    │   ├── index.js         
    │   └── components
    │       ├── App.js         
    │       ├── Header.js
    │       ├── Home.js
    │       ├── MainProduct.js
    │       └── product 
    │           ├── Products.js
    │           ├── Select.js
    │           ├── ShoppingCart.js       
    |           ├── Radio.js
    |           └── Checkbox.js
    │               
    |  
    └── README.md 

# How I made my component decision:
component構思：客戶點了想要的drink product button後，會出現客製化選單（一開始是關閉）， 選單裡面根據喜好選擇想要的冰量甜度..
     等，也能直接在選單drink增減的數量，接著按下“確認”按鈕，客戶的order會被記錄在購物車裡，購物車裡一樣有drink數量增減功能，
     也紀錄著顧客的每一份客製化點單，讓顧客能清楚地了解自己點了哪些飲品！

UI排版構思：drink product list 佔螢幕大概（7成）， shoppingCart (3成)，這樣一來個顧客可以很清楚的看到產品，又同時能知道自己
          點了哪些單（也方便做order增減的動作）！
          選單功能則是希望顧客點了drink的 "+" 按鈕後，會呈現並浮動在螢幕正中間！
