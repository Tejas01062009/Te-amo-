const heartContainer = document.getElementById('hearts-bg');
        function createHeart() {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = '❤️';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.fontSize = Math.random() * 20 + 10 + 'px';
            heart.style.animationDuration = Math.random() * 3 + 2 + 's';
            heartContainer.appendChild(heart);
            setTimeout(() => heart.remove(), 5000);
        }
        setInterval(createHeart, 300);

        // Opening Logic
        function openEnvelope() {
            document.getElementById('envelope').classList.add('open');
            document.getElementById('initial-choice').style.display = 'none';
            document.getElementById('intro-heading').style.opacity = '0';
            
            setTimeout(() => {
                document.getElementById('cat-gif').style.display = 'block';
                document.getElementById('final-choice').style.display = 'flex';
            }, 800);
        }

        // Persistent "No" Logic
        let noCount = 0;
        const noPhrases = [
            "Are you sure?", 
            "Pachhtogi!", 
            "Ek baar aur soch lo", 
            "Please?", 
            "Last chance!", 
            "Socho ek baar...", 
            "Really? 🥺", 
            "Click the bigger button!"
        ];

        function handleNo() {
            noCount++;
            const yesBtn = document.getElementById('yesBtn');
            const noBtn = document.getElementById('noBtn');

            if (noCount <= noPhrases.length) {
                noBtn.innerText = noPhrases[noCount - 1];
            }

            let newFontSize = 15 + (noCount * 22);
            let newPadding = 10 + (noCount * 12);
            
            yesBtn.style.fontSize = newFontSize + 'px';
            yesBtn.style.padding = ${newPadding}px ${newPadding * 2}px;

            if (noCount >= 8) {
                yesBtn.style.position = 'fixed';
                yesBtn.style.top = '0';
                yesBtn.style.left = '0';
                yesBtn.style.width = '100vw';
                yesBtn.style.height = '100vh';
                yesBtn.style.display = 'flex';
                yesBtn.style.alignItems = 'center';
                yesBtn.style.justifyContent = 'center';
                yesBtn.style.borderRadius = '0';
                yesBtn.innerText = "YES! ❤️";
            }
        }

        function celebrate() {
            document.getElementById('app-container').classList.add('hidden');
            document.getElementById('success-screen').style.display = 'block';
            document.body.style.backgroundColor = '#ff8fa3';
            for(let i=0; i<50; i++) setTimeout(createHeart, i*10);
        }
