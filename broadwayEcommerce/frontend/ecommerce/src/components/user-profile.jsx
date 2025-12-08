export const UserProfile=({user})=>{
    const a=10;
    return (
        <>
        <div>
        <p>name:{user.name}</p>
        <p>email:{user.email}</p>
        <p>phoneno:{user.phoneno || '-----'}</p>
        <p>count:{a}</p>
        </div>
        </>

    );
};

export const Multiply=({mul})=>{
    return(
        <div>
            <p>MULTIPLY</p>
            <p>{mul.no}*{mul.n}={mul.soln}</p>
        </div>
    )
}

