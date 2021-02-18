import {withIronSession} from 'next-iron-session';
import {NextApiHandler} from 'next';

export function withSession(handler: NextApiHandler) {
    return withIronSession(handler, {
        // password: 'c2a85490-cc60-4f21-94e8-8dc5dd3220da', //密钥，这个应该用环境变量
        password: process.env.SECRET, // 正确姿势是 用环境变量
        cookieName: 'blog',
        // 这个选项如果不设置 你本地开发是http的 就会种不下 cookie 获取 user 会是 undefined
        cookieOptions: {secure: false}
    });
}