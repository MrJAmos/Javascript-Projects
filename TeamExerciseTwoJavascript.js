"use strict"; 
let warden1 = {name:"monty", id:1, route: [3,1,2,3], gossip: [1]};
let warden2 = {name:"mon", id:2, route: [3,2,3,1],gossip: [2]};
let warden3 = {name:"moo", id:3, route: [4,2,3,4,5],gossip: [3]};
let numWarden = 3;

function calculateRoute(){
    let c = 1;
    console.log(warden1.name);
    let finished = false;
    let i1 = 0;
    let i2 = 0;
    let i3 = 0;
    while(!finished){
       let w1stop = warden1.route[i1]; 
       let w2stop = warden2.route[i2]; 
       let w3stop = warden3.route[i3]; 

        if(w1stop === w2stop && w2stop === w3stop){
            finished = true;
        }
        //done
        else if(w1stop === w2stop){
           warden1.gossip.forEach(function(gossip1) {
               warden2.gossip.forEach(function(gossip2) {
                  if(warden1.gossip.includes(gossip2) != true){
                        warden1.gossip.push(gossip2);
                  }
               });
           });
           warden2.gossip.forEach(function(gossip2) {
            warden1.gossip.forEach(function(gossip1) {
               if(warden2.gossip.includes(gossip1) != true){
                     warden2.gossip.push(gossip1);
               }
            });
        });
        }
        else if(w1stop === w3stop){
            warden1.gossip.forEach(function(gossip1) {
                warden3.gossip.forEach(function(gossip3) {
                   if(warden1.gossip.includes(gossip3) != true){
                         warden1.gossip.push(gossip3);
                   }
                });
            });
            warden3.gossip.forEach(function(gossip3) {
             warden1.gossip.forEach(function(gossip1) {
                if(warden3.gossip.includes(gossip1) != true){
                      warden3.gossip.push(gossip1);
                }
             });
         });
         }
         else if(w2stop === w3stop){
            warden2.gossip.forEach(function(gossip2) {
                warden3.gossip.forEach(function(gossip3) {
                   if(warden2.gossip.includes(gossip3) != true){
                         warden2.gossip.push(gossip3);
                   }
                });
            });
            warden3.gossip.forEach(function(gossip3) {
             warden2.gossip.forEach(function(gossip2) {
                if(warden3.gossip.includes(gossip2) != true){
                      warden3.gossip.push(gossip2);
                }
             });
         });
         }
         if(warden1.gossip.length === numWarden && warden2.gossip.length === numWarden && warden3.gossip.length === numWarden ){
             finished = true;
         }
         else{
            i1= (i1 + 1) % warden1.gossip.length;
            i2= (i2 + 1) % warden2.gossip.length;
            i3= (i3 + 1) % warden3.gossip.length;
            c++;
         }
    }
}