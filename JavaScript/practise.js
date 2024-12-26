const loadScript = async (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    script.onLoad = () => {
      resolve(src + " Done Success");
    }
    document.head.append(script);
  })
}
let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js");
a.then((value) => {
  console.log(value);
})

// const main2 = async () => {
//   console.log(new Date().getSeconds())
//     let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js");
    
//     console.log(a);
//   console.log(new Date().getSeconds());
// }

// main2();
