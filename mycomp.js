const myname=prompt("what's your name?")
const myclg=prompt("what's your clg?")
const mybranch=prompt("what's your branch?")
export default function Hello(){
    return(
    <>
        <h1>my name is {myname}</h1>
        <h1>my name is {myclg}</h1>
        <h1>my name is {mybranch}</h1>
    </>
    );
}