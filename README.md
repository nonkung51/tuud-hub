# TuudHub
[![Build Status](https://travis-ci.org/AOEpeople/Tagging.svg?branch=master)](https://travis-ci.org/AOEpeople/Tagging)

<img src="https://github.com/nonkung51/tuud-hub/blob/master/Screen%20Shot%202563-06-28%20at%2021.02.49.png?raw=true" width="200">

TuudHub (อ่านว่า ตู๊ดฮับ) เป็นโปรเจคเพื่อส่งในงาน Stupidhackathon ครั้งที่ 4 โดยสร้างขึ้นโดยมีแนวคิดจาก

_เราอยากจะทำโซเชียล ที่ปลอดภัยกับทุก ๆ คน เราก็เลยสังเกตุจากรายการทีวี และเล็งเห็นว่าวิธีที่จะทำให้สื่อทำให้สิ่งต่าง ๆ ปลอดภัย สำหรับเด็กนั่นคือแนวคิดที่เรียกว่า การ **เซ็นเซอร์**_

(ซูราบาชิ 😏😏)

<img src="https://github.com/nonkung51/tuud-hub/blob/master/Screen Shot 2563-06-28 at 21.27.12.png" width="800">

แต่แน่นอนว่าทีม Dev เราไม่ค่อยจะขยัน (โดยเฉพาะทีม ML) เราเลยเลือกที่จะเบลอทั้งภาพแทน

โดยมี Tech Stack ต่างๆดังนี้
* React สำหรับ Frontend เพราะทุกคนรัก React ~~และไม่ชอบ Angular~~
* Flask สำหรับส่วนของ Backend
* Keras สำหรับส่วนของการประมวลผลภาพ (ในที่นี้คือการเบลอภาพ)



# Image Processing
อ่านมาจนถึงตรงนี้แล้วทุกคนอาจจะคาดการว่าเราอาจจะเลือกวิธีการเบลอภาพโดยใช้ OpenCV ซึ่งสามารถใช้คำสั่ง `cv2.GaussianBlur()` ได้ง่ายๆ

แต่เนื่องจากเรากลัวมันไม่คูลพอเราเลยเลือกที่จะนำ Neural Network เข้ามาใช้งานแทน โดยเราเลือกใช้สิ่งที่เรียกว่า AutoEncoder ในการช่วยสร้างภาพที่เบลอขึ้นมา
[อ่านเพิ่มเติม](https://blog.keras.io/building-autoencoders-in-keras.html)

**Topology ของ Neural Network ที่ใช้**

<img src="https://github.com/nonkung51/tuud-hub/blob/master/Screen Shot 2563-06-28 at 21.06.33.png" width="600">

**ผลลัพท์ที่ได้**

<img src="https://github.com/nonkung51/tuud-hub/blob/master/Screen Shot 2563-06-28 at 21.09.11.png" width="600">
