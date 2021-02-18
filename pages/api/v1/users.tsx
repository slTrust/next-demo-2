import {NextApiHandler} from 'next';
import {getDatabaseConnection} from '../../../lib/getDatabaseConnection';
import {User} from '../../../src/entity/User';
import md5 from 'md5';

const Posts: NextApiHandler = async (req, res) => {
    const {username, password, passwordConfirmation} = req.body;
    const connection = await getDatabaseConnection();// 第一次链接能不能用 get
    const errors = {
        username: [] as string[], password: [] as string[], passwordConfirmation: [] as string[]
    };
    if (username.trim() === '') {
        errors.username.push('不能为空');
    }
    if (!/[a-zA-Z0-9]/.test(username.trim())) {
        errors.username.push('格式不合法');
    }
    if (username.trim().length > 42) {
        errors.username.push('太长');
    }
    if (username.trim().length <= 3) {
        errors.username.push('太短');
    }
    const found = connection.manager.find(User,{username})
    if (found) {
        errors.username.push('已存在，不能重复注册');
    }
    if (password === '') {
        errors.password.push('不能为空');
    }
    if (password !== passwordConfirmation) {
        errors.passwordConfirmation.push('密码不匹配');
    }
    const hasErrors = Object.values(errors).find(v => v.length > 0);
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    if (hasErrors) {
        res.statusCode = 422;
        res.write(JSON.stringify(errors));
    } else {
        const user = new User();
        user.username = username.trim();
        user.passwordDigest = md5(password);
        try {
            await connection.manager.save(user);
            res.statusCode = 200;
            res.write(JSON.stringify(user));
        }catch (error) {
            res.statusCode = 422;
            errors.username.push('msg:'+error.message,'detail:'+error.detail);
            res.write(JSON.stringify(errors));
        }
        res.end();
    }
};

export default Posts;