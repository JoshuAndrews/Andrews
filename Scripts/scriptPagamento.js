const inputCartao = document.getElementById('numeroDeCartao');
        const erroCartao = document.getElementById('erroCartao');
        const inputDataVencimento = document.getElementById('dataDeVencimento');
        const erroDataVencimento = document.getElementById('erroDataVencimento');
        const inputCVV = document.getElementById('codigoDeSeguranca');
        const erroCVV = document.getElementById('erroCVV');
        const inputCPF = document.getElementById('cpf');
        const erroCPF = document.getElementById('erroCPF');

        inputCartao.addEventListener('input', function() {
            let numeroCartao = this.value;
            numeroCartao = numeroCartao.replace(/\D/g, ''); 

            if (numeroCartao.length > 4) {
                numeroCartao = numeroCartao.substring(0, 4) + '-' + numeroCartao.substring(4);
            }
            if (numeroCartao.length > 9) {
                numeroCartao = numeroCartao.substring(0, 9) + '-' + numeroCartao.substring(9);
            }
            if (numeroCartao.length > 14) {
                numeroCartao = numeroCartao.substring(0, 14) + '-' + numeroCartao.substring(14);
            }

            numeroCartao = numeroCartao.substring(0, 19);

            this.value = numeroCartao;

            if (numeroCartao.length === 19) {
                erroCartao.textContent = '';
            } else {
                erroCartao.textContent = 'O número do cartão deve ter 16 dígitos';
            }
        });


        inputDataVencimento.addEventListener('input', function () {
            let data = this.value;
            data = data.replace(/\D/g, '');

            if (data.length > 4) {
                data = data.substr(0, 4);
            }

            if (data.length >= 2) {
                data = data.substr(0, 2) + '/' + data.substr(2);
            }

            this.value = data;

            if (data.length === 5) {
                const [mes, ano] = data.split('/');
                const anoAtual = new Date().getFullYear() % 100;

                if (
                    (parseInt(mes) >= 1 && parseInt(mes) <= 12) &&
                    (parseInt(ano) >= 0 && parseInt(ano) <= 99)
                ) {
                    erroDataVencimento.textContent = '';
                } else {
                    erroDataVencimento.textContent = 'Mês ou ano inválido.';
                }
            } else {
                erroDataVencimento.textContent = 'Formato de data inválido. Use MM/AA.';
            }
        });

        inputDataVencimento.addEventListener('keydown', function (event) {
            if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
                event.preventDefault();
            }
        });

        inputCVV.addEventListener('input', function () {
            const cvv = this.value;
            const cvvLength = cvv.length;

            const regex = /^[0-9]*$/;

            if (regex.test(cvv)) {
                if (cvvLength === 3) {
                    erroCVV.textContent = '';
                } else {
                    erroCVV.textContent = 'O CVV deve ter 3 dígitos.';
                }
            } else {
                erroCVV.textContent = 'O CVV deve conter apenas números.';
            }
        });

        inputCVV.addEventListener('keydown', function (event) {
            if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
                event.preventDefault();
            }
        });



        inputCPF.addEventListener('input', function () {
            let cpf = this.value;
            cpf = cpf.replace(/\D/g, '');

            if (cpf.length > 3) {
                cpf = cpf.substring(0, 3) + '.' + cpf.substring(3);
            }
            if (cpf.length > 7) {
                cpf = cpf.substring(0, 7) + '.' + cpf.substring(7);
            }
            if (cpf.length > 11) {
                cpf = cpf.substring(0, 11) + '-' + cpf.substring(11);
            }

            cpf = cpf.substring(0, 14);

            this.value = cpf;

            if (cpf.length === 14) {
                if (!validarCPF(cpf)) {
                    erroCPF.textContent = 'CPF inválido.';
                } else {
                    erroCPF.textContent = '';
                }
            } else {
                erroCPF.textContent = 'O CPF deve ter 11 dígitos.';
            }
        });

        inputCPF.addEventListener('keydown', function (event) {
            if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
                event.preventDefault();
            }
        });

        function validarCPF(cpf) {
            cpf = cpf.replace(/\D/g, '');

            if (cpf.length !== 11) {
                return false;
            }

            let soma = 0;
            let resto;

            for (let i = 1; i <= 9; i++) {
                soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
            }

            resto = (soma * 10) % 11;

            if (resto === 10 || resto === 11) resto = 0;

            if (resto !== parseInt(cpf.substring(9, 10))) return false;

            soma = 0;

            for (let i = 1; i <= 10; i++) {
                soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
            }

            resto = (soma * 10) % 11;

            if (resto === 10 || resto === 11) resto = 0;

            if (resto !== parseInt(cpf.substring(10, 11))) return false;

            return true;
        }



        document.getElementById('pagamentoCartao').addEventListener('change', function() {
            document.getElementById('formCartao').style.display = 'block';
            document.getElementById('formPix').style.display = 'none';
        });
        
        document.getElementById('pagamentoPix').addEventListener('change', function() {
            document.getElementById('formCartao').style.display = 'none';
            document.getElementById('formPix').style.display = 'block';
        });