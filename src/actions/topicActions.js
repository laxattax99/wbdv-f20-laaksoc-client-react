import topicService from "../services/TopicService";
export const DELETE_TOPIC = "DELETE_TOPIC";
export const UPDATE_TOPIC = "UPDATE_TOPIC";
export const CREATE_TOPIC = "CREATE_TOPIC";
export const FIND_TOPICS_FOR_LESSONS = "FIND_TOPICS_FOR_LESSONS";
export const FIND_TOPIC = "FIND_TOPIC";

export const deleteTopic = (dispatch, topic) =>
  topicService.deleteTopic(topic._id).then((status) =>
    dispatch({
      type: DELETE_TOPIC,
      topic: topic,
    })
  );

export const updateTopic = (dispatch, topic) =>
  topicService.updateTopic(topic._id, topic).then((status) =>
    dispatch({
      type: UPDATE_TOPIC,
      topic,
    })
  );

export const createTopic = (dispatch, lessonId, topic) =>
  topicService.createTopic(lessonId, topic).then((actualTopic) =>
    dispatch({
      type: CREATE_TOPIC,
      topic: actualTopic,
    })
  );

export const findTopics = (dispatch, lessonId) => {
  topicService.findTopicsForLesson(lessonId).then((actualTopics) =>
    dispatch({
      type: FIND_TOPICS_FOR_LESSONS,
      topics: actualTopics,
      lessonId: lessonId,
    })
  );
};

export const findTopic = (dispatch, topicId) => {
  topicService.findTopic(topicId).then((actualTopic) =>
    dispatch({
      type: FIND_TOPIC,
      topic: actualTopic,
    })
  );
};
