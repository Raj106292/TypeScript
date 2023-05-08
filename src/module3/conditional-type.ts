// conditional
type a1 = string;
type a2 = a1 extends string ? string : number;

type a3 = undefined;
type a4 = number;

// nested conditional type
type d = a1 extends null ? null : a3 extends number ? number : a4 extends null ? null : never;

interface ISheikh {
    wife1: string,
    wife2: string
}

type A = keyof ISheikh; // wife1 | wife2

type CheckProperty<T, K> = K extends T ? true : false; // here K for wife2 and T for ISheikh
type checkWife1 = CheckProperty<ISheikh, "wife2">;

// tough one
type Friends = "Monika" | "Alia" | "Dipika";
type RemoveFriends<X, Y>  = X extends Y ? never : X;
type CurrentFriends = RemoveFriends<Friends, "Alia">;