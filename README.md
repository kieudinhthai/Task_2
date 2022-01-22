# Task_2
Backend

#### Cách chạy dự án
Clone project trên  , "npm i" để cài đặt  node_modules, "npm start" để chạy chương trình.

#### T2.1 Tạo database với MongoDB Atlas free tier

![data](https://user-images.githubusercontent.com/72057059/150640703-fc291ee6-81a3-4a9c-84d4-3321c1e00577.PNG)

#### T2.2 Tạo 2 APIs
- GET API
  - url : api/search
  - query : chuỗi tương tự với tên hoặc email được nhập vào textbox tìm kiếm  (?q=john)
  
  ![postman-search](https://user-images.githubusercontent.com/72057059/150640712-35dcbd27-9714-4af4-87ea-9d40438f8fc8.PNG)

- POST API
  - url : api/multi-add
  - data : một mảng các dữ liệu cần sửa với
 
 ![postmain_update](https://user-images.githubusercontent.com/72057059/150640721-1a9e4616-37a7-4faf-af80-010bdfba80f8.PNG)

 
 - Authentication 
   - sử dụng Jwt và coookies

  ![posman-login](https://user-images.githubusercontent.com/72057059/150640728-d1efb458-eb81-4180-9950-6b7ca7f88809.PNG)
  
  ![postman-cookie](https://user-images.githubusercontent.com/72057059/150640863-0c6d1c48-be0a-475f-a6e6-b7e0dd8e23db.PNG)
 
 - Nếu chưa có cookie sẽ xuất thông báo "please login " và không thể thực hiện chức năng nào khác ngoài đăng nhập 
  
 #### T2.3 Tạo trang web với  Bootstrap 4 , Axios và Jquery
 
 - GET API
 ![search](https://user-images.githubusercontent.com/72057059/150640757-960b964c-707b-4bef-a3a4-2baf2a6b4e1b.png)
 Ấn search => Thông báo
 ![nonfitication](https://user-images.githubusercontent.com/72057059/150640786-8d8ea753-03f0-436c-a925-c1b3a5759a75.PNG)
 => kết quả tìm kiếm 
 ![search result](https://user-images.githubusercontent.com/72057059/150640813-3745b7ff-22a5-490d-be58-5e677f30f8ff.PNG)

 
 - POST API
 Dữ liệu ban đầu
  
  ![data-1](https://user-images.githubusercontent.com/72057059/150641027-7d1ea652-5854-4425-ade7-c816c8ed9599.PNG)
  
  Chọn và thay đổi giá trị các trường trên giao diện sau đó bấm Click to update users
  
  ![edit](https://user-images.githubusercontent.com/72057059/150641049-9041d1ed-f128-43f9-83f7-72f5a9664c26.PNG)
  
  Thông báo trả về 
  ![edit-nonfitication](https://user-images.githubusercontent.com/72057059/150641078-f6232850-d462-4b79-b13f-fd8d4e1cd4d3.PNG)
  
  kết quả cập nhật 
  ![edit-result](https://user-images.githubusercontent.com/72057059/150641110-d1a37afe-9d26-4973-9555-15f42c296a95.PNG)
  
  - Login (không có trong yêu cầu)
  ![login](https://user-images.githubusercontent.com/72057059/150641147-505208e0-ed68-4745-a58e-c4bba2ee9ab2.PNG)
  
  đăng nhập thành công sẽ  tạo cookie chuyển đến trang index (user: admin, password: abc@123)
    
   ![cookie](https://user-images.githubusercontent.com/72057059/150641270-1b5a5873-9d26-42bf-ada4-c5787ba5c12e.PNG)
   
   đăng nhập sai sẽ không chuyển trang
    

    




  
 
