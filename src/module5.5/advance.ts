interface Model<TData, TMethods>{
    data: TData;
    methods: TMethods;
}

interface INowUser { // interface for properties
    firstName: string;
    lastName: string;
}

interface IMethods { // interface for methods
    fullName():string ;
}

type model = Model<INowUser, IMethods>

class UserModal implements model{
    data: INowUser;
    methods: IMethods;

    constructor(firstName: string, lastName: string){
        this.data = { firstName, lastName };
        this.methods = {
            fullName: () => `${firstName} ${lastName}`
        }
    }
}

const user1 = new UserModal("Raj", "Das");
console.log(user1.methods.fullName());