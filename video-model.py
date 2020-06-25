import cv2
from cv2 import VideoWriter, VideoWriter_fourcc

fourcc = VideoWriter_fourcc(*'MP4V')
FRAMERATE = 30

from keras.models import load_model

model = load_model('model.h5')
model.load_weights('AutoEncoder_Cifar10_Deep_weights.09-0.57-0.56.hdf5')

video = cv2.VideoWriter('video.mp4',fourcc, FRAMERATE,(32,32))

cap = cv2.VideoCapture('res/video.mp4')

while(cap.isOpened()):
    ret, img = cap.read()

    results = model.predict(img.reshape(-1, 32, 32, 3))

    result_img = results[0].reshape(32, 32, 3)
    result_img = cv2.resize(result_img, (64, 64))

    video.write(result_img)

video.release()