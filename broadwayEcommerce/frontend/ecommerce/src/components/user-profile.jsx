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

export const multiply=({mul})=>{
    return(
        <div>
            <p>MULTIPLY</p>
            <p>{mul.no}*{mul.i}=mul.soln</p>
        </div>
    )
}