export default function MainPage (){
    return (
        <div class="main hide">
            <div class="center">
            <img class="logo" src="assets/logo.png" alt="logo" />
            <button class="startCard" onClick={TryReact}> Praticar React </button> 
            </div>
        </div>
    )
}
function TryReact(){
    alert("Funfa")
}