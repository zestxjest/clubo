import * as M from '../models';

const thinky = require('thinky')();
const r = thinky.r;

export {ILocalUserRepository, LocalUserRepository}

interface ILocalUserRepository {
    getUserById(id: string): any;
    getUsersByNames(names: [String]): any;
    getUsersByIds(ids: [String]): any;
    getUserByLoginName(loginName: String): any;
    getUserByMail(email: String): any;
    getUsersByQuery(query: String): any;
    getUserByNameAndKey(loginName: String, key: String): any;
    addOrUpdate(user: any): void;
}

class LocalUserRepository implements ILocalUserRepository {
    getUserById(id: string): any {
        return M.LocalUserModel.get(id)
            .run();
    }

    getUsersByNames(names: [String]): any {
        return M.LocalUserModel.filter(function (user: any) {
            return r.expr(names).contains(user("loginName"));
        })
            .run();
    }

    getUsersByIds(ids: [String]): any {
        return M.LocalUserModel.filter(function (user: any) {
            return r.expr(ids).contains(user("id"));
        })
            .run();
    }

    async getUserByLoginName(loginName: String) {
        const result = await M.LocalUserModel.filter({ loginName: loginName })
            .run();
        return result[0];
    }

    getUserByMail(email: String): any {
        return M.LocalUserModel.filter({ email: email })
            .run();
    }

    getUsersByQuery(query: String): any {

    }

    getUserByNameAndKey(loginName: String, key: String): any {
        return M.LocalUserModel.filter({ loginName: loginName, retrieveKey: key })
            .run();
    }

    async addOrUpdate(user: any) {
        let userInDB = await this.getUserByLoginName(user.loginName);
        if (userInDB) {
            return await userInDB.save();
        } else {
            return await user.save();
        }
    }
}