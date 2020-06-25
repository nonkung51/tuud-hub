def predict(path):
    import cv2
    import tensorflow.keras as keras

    model = keras.models.load_model('models/model-1593070539.2061813.h5')

    img = cv2.imread(path)
    h, w, _ = img.shape
    img = cv2.resize(img, (224, 224))
    img = img.astype('float32')
    img /= 255

    results = model.predict(img.reshape(-1, 224, 224, 3))

    result_img = results[0]

    result_img = cv2.resize(result_img, (w, h))

    result_img *= 255
    result_img = result_img.astype('int32')

    cv2.imwrite(path, result_img)

if __name__ == '__main__':
    predict('/Users/non_thakon/Workspace/stupidhackathon/src/res/558000014050901.jpeg')