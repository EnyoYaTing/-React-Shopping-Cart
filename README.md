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
    │       ├── app.js         
    │       ├── Home.js
    │       ├── Main.js
    │       ├── Products.js
    │       ├── Select.js
    │       └── ShoppingCart.js                 
    |   
    └── README.md 

# How I made my component decision:
component構思：客戶點了想要的drink product button後，會出現客製化選單（一開始是關閉）， 選單裡面根據喜好選擇想要的冰量甜度..
     等，也能直接在選單drink增減的數量，接著按下“確認”按鈕，客戶的order會被記錄在購物車裡，購物車裡一樣有drink數量增減功能，
     也紀錄著顧客的每一份客製化點單，讓顧客能清楚地了解自己點了哪些飲品！

UI排版構思：drink product list 佔螢幕大概（7成）， shoppingCart (3成)，這樣一來個顧客可以很清楚的看到產品，又同時能知道自己
          點了哪些單（也方便做order增減的動作）！
          選單功能則是希望顧客點了drink的 "+" 按鈕後，會呈現並浮動在螢幕正中間！

1. Home.js : Home Page
2. Main.js : 用來控制state及傳遞state，其中Main裡面又包含的三個components( Products, Select, ShoppingCart)
3. Products.js : 用來放所有的 drink product list
4. Select.js : 客製化選單功能，可以選擇冰量，甜度... 
5. ShoppingCart.js: 購物車，用來記錄顧客點了哪些order

# 實際開發：
開發時間： 4/30-5/1 (7小時)
開發框架：React-CLI, 原生CSS
實作過程：花了些時間思考 dailydrink app 想呈現給顧客的樣子，並且構圖，有參考“foodpanda”網站，
   並且思索兩個json檔（./shared/drinks.js和./shared/customs.js）的資料該長什麼樣子，
   也思索，如何存取state及傳遞給children components

未來要改善的地方：
1. Data Structure: 在customs.js這個json檔裡，存了三筆變數（分別是：ICE, SUGAR 以及INGREDIENT)，
                    因為時間關係，沒有處理得很好，未來將整合成一筆變數！
                    這也造成太多repeated的code, 整合之後， 期待程式碼會更加簡潔 
2. UI原件：因為目標著重於先將功能做出，導致UI呈現的不美觀，也會在改善！                    
