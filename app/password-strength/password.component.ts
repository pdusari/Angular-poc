import {    Component,
    Input,
    OnChanges,
    OnInit,
    Provider,
    ViewChild,
    forwardRef } from '@angular/core';

@Component({
    moduleId:module.id,
    selector: 'password-strength',
    templateUrl: './password.component.html',
    inputs:['password']
})
export class PasswordComponent { 
    minChar:number ;
    passIndex: number;
    label:string;
    verdicts:Array <any>;
    colors:Array <any>;
    width:Array <any>;
    scores:Array <any>;
    checks:Array <any>;
    passStrengthZen:string;
    passbarClassZen:string;
    passbarHintZen:string;
    render:boolean;
    injectTarget:any;
    injectPlacement:string;
    password:string;
    @ViewChild('paashint') paashint:any; 
    @ViewChild('passbar') passbar : any; 
     ngOnInit() {
         this.initOptions();
		 if(this.password){
			this.runPassword(this.password);
		 }
       //  this.runPassword(this.password);
     }
	 ngOnChanges(changes:any) {
		 if(changes.password.currentValue){
			 	this.runPassword(changes.password.currentValue);
		 }
//console.log(changes);
 //this.runPassword(changes.password.currentValue);
}
    initOptions(){
            this.minChar=6; // too short while less than this
			this.passIndex=2; // Weak
			// output verdicts, colours and bar %
			this.label='Password strength: ';
			this.verdicts= [
				'Too Short',
				'Very weak',
				'Weak',
				'Good',
				'Strong',
				'Very strong'
			];
			this.colors= [
				'#ccc',
				'#500',
				'#800',
				'#f60',
				'#050',
				'#0f0'
			];
			this.width= [
				'5%',
				'10%',
				'30%',
				'60%',
				'80%',
				'100%'
			];
			// tweak scores here
			this.scores= [
				10,
				15,
				25,
				45
			];

			// styles
			this.passStrengthZen= 'div.pass-container';
			this.passbarClassZen= 'div.pass-bar'; // css controls
			this.passbarHintZen= 'div.pass-hint';
			// output
			this.render= true; // it can just report for your own implementation
			this.injectTarget=null;
			this.injectPlacement='after';
            this.checks= [
			/* alphaLower */ {
				re: /[a-z]/,
				score: 1
			},
			/* alphaUpper */ {
				re: /[A-Z]/,
				score: 5
			},
			/* mixture of upper and lowercase */ {
				re: /([a-z].*[A-Z])|([A-Z].*[a-z])/,
				score: 2
			},
			/* threeNumbers */ {
				re: /(.*[0-9].*[0-9].*[0-9])/,
				score: 7
			},
			/* special chars */ {
				re: /.[!@#$%^&*?_~]/,
				score: 5
			},
			/* multiple special chars */ {
				re: /(.*[!@#$%^&*?_~].*[!@#$%^&*?_~])/,
				score: 7
			},
			/* all together now, does it look nice? */ {
				re: /([a-zA-Z0-9].*[!@#$%^&*?_~])|([!@#$%^&*?_~].*[a-zA-Z0-9])/,
				score: 3
			},
			/* password of a single char sucks */ {
				re: /(.)\1+$/,
				score: 2
			}
		];
     }
     runPassword(newpass:any){
		 //console.log(this.password);

			var score = this.checkPassword(newpass);
			console.log(score);
				var index = 0;
				var s = this.scores;

				if (score < 0 && score > -199){
					index = 0;
				}
				else {
					s.push(score);
					s.sort(function(a:any, b:any){
						return a - b;
					});
					index = s.indexOf(score) + 1;
				}
				if(index>4){index=5;}
					console.log(score,"index",index);
				var verdict = this.verdicts[index] || this.verdicts[this.verdicts.length];
			

			if (this.render){
				//console.log([this.label, verdict].join(''));
				 this.paashint.nativeElement.innerHTML=[this.label, verdict].join('');
				 var width=this.width[index] || this.width[this.width.length];
				 var background=this.colors[index] || this.colors[this.colors.length];
				 this.passbar.nativeElement.setAttribute("style","width:"+width+";background:"+background);
				// this.passbar.nativeElement.setStyles({
				// 	width: this.width[index] || this.width[this.width.length],
				// 	background: this.colors[index] || this.colors[this.colors.length]
				// });

			}

     }
     		checkPassword(pass:any){
			var score = 0;
				var minChar = this.minChar;
				var len = pass.length;
				var diff = len - minChar;

			(diff < 0 && (score -= 100)) || (diff >= 5 && (score += 18)) || (diff >= 3 && (score += 12)) || (diff === 2 && (score += 6));
			for (var i = 0; i < this.checks.length; i++) {
				pass.match(this.checks[i].re) && (score += this.checks[i].score);
			}
			// angular.each(this.checks, function(check){
			// 	pass.match(check.re) && (score += check.score);
			// });

			// bonus for length per char
			score && (score += len);

			return score;
		}
    	
}
