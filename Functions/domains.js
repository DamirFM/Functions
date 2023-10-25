// a function that takes a list of emails as input and returns
//  the number of emails located on each free domain. 
// The list of free domains is stored in the freeEmailDomains constant.

const emails = [
    'info@gmail.com',
    'info@yandex.ru',
    'info@hotmail.com',
    'mk@host.com',
    'support@hexlet.io',
    'key@yandex.ru',
    'sergey@gmail.com',
    'vovan@gmail.com',
    'vovan@hotmail.com',
    'ivan@yahoo.com',
  ];

  const freeEmailDomains = [
    'gmail.com',
    'yandex.ru',
    'hotmail.com',
    'yahoo.com',
  ];

  
export default function () {
    const mappedEmails = emails.map((email) => email.split('@')[1]);
    const filtredEmails = mappedEmails.filter((domain) => freeEmailDomains.includes(domain));
    const reducedEmails = filtredEmails.reduce((acc, domain) => {
        if (!acc[domain]){
            acc[domain] = 0;
        }
        acc[domain] += 1;
        return acc;
    }, {})
    
    return reducedEmails;
}