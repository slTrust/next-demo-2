import {NextApiHandler} from 'next';
import {getDatabaseConnection} from '../../../lib/getDatabaseConnection';
import {User} from '../../../src/entity/User';
import md5 from 'md5';

const Posts: NextApiHandler = async (req, res) => {
    const {username, password, passwordConfirmation} = req.body;
    const connection = await getDatabaseConnection();// 第一次链接能不能用 get
    res.setHeader('Content-Type', 'application/json; charset=utf-8');

    const user = new User();
    user.username = username.trim();
    user.password = password;
    user.passwordConfirmation = passwordConfirmation;
    await user.validate();

    if(await user.hasErrors()){
        res.statusCode = 422;
        res.write(JSON.stringify(user.errors));
    }else{
        try {
            await connection.manager.save(user);
            res.statusCode = 200;
            res.write(JSON.stringify(user));
        }catch (error) {
            res.statusCode = 422;
            user.errors.username.push('msg:'+error.message,'detail:'+error.detail);
            res.write(JSON.stringify(user.errors));
        }
    }
    res.end();
};

export default Posts;