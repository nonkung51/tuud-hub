from keras.models import load_model
import matplotlib.pyplot as plt
import cv2

img = cv2.imread('/Users/non_thakon/Workspace/stupidhackathon/src/res/cow.jpeg')
h, w, _ = img.shape

img = cv2.resize(img, (32, 32))
img = img.astype('float32')
img = img / 256

plt.imshow(img.reshape(32, 32, 3))
plt.show()

# print(img.reshape(-1, 32, 32, 3))

model = load_model('/Users/non_thakon/Workspace/stupidhackathon/src/model.h5')
model.load_weights('/Users/non_thakon/Workspace/stupidhackathon/src/AutoEncoder_Cifar10_Deep_weights.09-0.57-0.56.hdf5')

results = model.predict(img.reshape(-1, 32, 32, 3))

result_img = results[0].reshape(32, 32, 3)

result_img *= 255
result_img = cv2.resize(result_img, (w, h))
result_img = result_img.astype('int32')

cv2.imwrite('messigray.png',result_img)
# plt.imshow(result_img)
# plt.show()

# cv2.imshow('', result)
# cv2.waitKey(0)

# #closing all open windows  
# cv2.destroyAllWindows() 
