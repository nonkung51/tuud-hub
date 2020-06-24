from keras.datasets import cifar100

(x_train100, y_train100), (x_test100, y_test100) = cifar100.load_data()

import cv2

imgs = []

for (img, i) in enumerate(range(100)):
    imgs.append(x_train100[i])

video = cv2.VideoWriter('video.avi',-1,1,(32,32))

for img in imgs:
    video.write(img)

video.release()