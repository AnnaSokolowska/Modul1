'use strist';

{

    const earn = Number(prompt('Введите сумму вашего дохода'));

    if (earn > 0 && earn <= 15000) {
        console.log(`Сумма налога к уплате равна: ${earn * 0.13}`);
    }
    if (15000 < earn && earn <= 50000) {
        console.log(`Сумма налога к уплате равна: ${earn * 0.2}`);
    }
    if (earn > 50000) {
        console.log(`Сумма налога к уплате равна: ${earn * 0.3}`);
    }

}