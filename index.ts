interface IUser {
    name: string; // This is a user interface
}

type TUser = {
    name: string; // This is a user type
}

const user: IUser = {
    name: 'jasmin' // This is a user object

};

const user2: TUser = {
    name: 'jasmin' // This is a user object
};
