import {TopicCollectModel} from '../models/TopicCollectModel';
const thinky = require('thinky')();
const r = thinky.r;

export { TopicCollectRepository}

class TopicCollectRepository {
    getTopicCollect(userId: String, topicId: String): any {
        return TopicCollectModel.filter({
            userId: userId,
            topicId: topicId
        })
            .run();
    }

    getTopicCollectsByUserId(userId: string): any {
        return TopicCollectModel.filter({
            userId: userId
        })
            .run();
    }

    addOrUpdate(userId: string, topicId: string): void {

    }

    remove(userId: string, topicId: String): void {

    }
}


