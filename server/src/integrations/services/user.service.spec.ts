import User from '../../model/User'
import UserService from '../../services/UserService'

const userService:UserService = new UserService();

test("Userservice should exist",()=>{
    expect(userService.list).toBeDefined();
    expect(userService.save).toBeDefined();
    expect(userService.update).toBeDefined();
    expect(userService.remove).toBeDefined();
});

describe("UserService tests",()=>{
    const user:User = {
        name:'Test',
        email:'test:test.com',
        password:'testtest'
}
expect(userService.save(user))
})