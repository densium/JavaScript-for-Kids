function loadScript(src, buttonId) {
    console.log(src);
    console.log(buttonId);

    let script = document.createElement('script');
    script.src = src;
    script.type = "module";

    script.onload = () => document.getElementById(buttonId).disabled = true;

    document.head.append(script);
}