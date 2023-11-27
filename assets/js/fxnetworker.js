function workerMain(){
    postMessage(0);
    setTimeout(workerMain, 250); // poll updates 4 times per second
}
workerMain();