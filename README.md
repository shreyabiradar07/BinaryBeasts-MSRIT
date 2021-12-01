# Swayam by BinaryBeasts-MSRIT
An AI-based smart positioning web app for X-ray workflows.

#### Problem Statement: AI to evaluate the overall patient body position meeting clinical examination requirement.

#### Observation:
The optimality of the CXR examinations reaches
to 50%, and that is due to several reasons, most
importantly related positioning error 53%,
technical error with 30% and communication
error with 17%

[Research Paper](https://www.researchgate.net/publication/330142781_EVALUATION_OF_POSITIONING_ERRORS_FOR_IN_ROUTINE_CHEST_X-RAY_AT_BEIT_JALA_GOVERNMENTAL_HOSPITAL)

With estimates of average diagnostic error rates ranging from 3% to 5%, there are approximately 40 million diagnostic
errors involving imaging annually worldwide.
1. High X-Ray Exposure on patients due to multiple retakes.
2. On an average takes 5-7 mins per X-Ray image acquisition.
3. Requires a minimum of 2 technicians and a radiologist for every X-Ray acquisition.

#### Solution: A smart positioning collimator that reduces manual work, exposure radiation and improves accuracy.

Patient image is acquired and sent to the Cloud for detecting positioning errors.
- Patient coordinates received are then assessed using Pose Detection.
- Based on pose detected, current position would be analysed using an AI PoseNet Algorithm.
- Optimal bucky height and collimation area is estimated based on patient’s physique.
- The overall feedback regarding positioning error is provided to both patient and the radiologist via a voice
assistant.

#### Solution Architechture
![arch](https://github.com/shreyabiradar07/BinaryBeasts-MSRIT/blob/main/screenshots/architechture.png)

#### IMPACT
- Helps in correcting positioning errors prior to image acquisition
- Reducing the time and additional dose associated with a repeat exposure while improving image consistency.(X-ray
Retakes)
- Its automated features also decrease the time that a radiographer needs to be in close contact with patients for
positioning — a huge benefit in the presence of infectious diseases.
- Realtime auto upgradation ,storage of images and further datasets for improving the trained models and research
can be done in a cloud based architecture easily as compared to Hardware solutions.
#### FUTURE ASPECTS
- Can be integrated with Philips Radiology Smart Assistant for further analysing the x-ray acquired.
- A similar smart workflow can be implemented with Ultrasonic system detection.
