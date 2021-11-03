const randomType = () => {
    let type = Math.floor(Math.random() * 5);
    switch (type) {
        case 0:
            return "ppf";
            break;
        case 1:
            return "daily";
            break;
        case 2:
            return "love";
            break;
        case 3:
            return "problem";
            break;
        case 4:
            return "guidance";
            break;
    };
};

const inputs = new URLSearchParams(window.location.search);

let userName = '';
let readingType = '';

function cleanInput (str){
    if(!str) return null
    let temp = str.trim()
    return temp[0].toUpperCase() + temp.substring(1)
}

userName = cleanInput(inputs.get('user-name'));
readingType = inputs.get('reading-type');

// This is the result variable.
let result = '';
let notif = document.getElementById("result");
const tarotForm = document.getElementById('reading');
const formParent = document.getElementById('formParent');
const instruction = document.getElementById('instruction');

// Function to generate three numbers.
    let generateCard = (except1, except2) => {
        let number = Math.floor(Math.random() * 78);
        if (except1 || except2) {
            while (number === except1 || number === except2) {
                number = Math.floor(Math.random() * 78);
            };
        };
        return number;
    };
    
// Equate each generated number to a card.
    let defineCard = (num) => {
        let card = [];
        switch (num) {
            case 0:
                card = ['Ace of Cups', 'a new relationship', 'proposal'];
                break;
            case 1:
                card = ['Two of Cups', 'romantic love', 'partnership', 'marriage'];
                break;
            case 2:
                card = ['Three of Cups', 'friendship', 'celebration', 'support'];
                break;
            case 3:
                card = ['Four of Cups', 'apathy', 'unfulfillment', 'surprise gift'];
                break;
            case 4:
                card = ['Five of Cups', 'loss', 'regret', 'grief'];
                break;
            case 5:
                card = ['Six of Cups', 'nostalgia', 'gift', 'reunion'];
                break;
            case 6:
                card = ['Seven of Cups', 'choices', 'a feeling of being overwhelmed', 'commitment issues'];
                break;
            case 7:
                card = ['Eight of Cups', 'withdrawal', 'moving on', 'abandonment'];
                break;
            case 8:
                card = ['Nine of Cups', 'wishes coming true', 'good health', 'material abundance'];
                break;
            case 9:
                card = ['Ten of Cups', 'family contentment', 'love and support', 'happiness'];
                break;
            case 10:
                card = ['Page of Cups', 'studiousness', 'new love', 'volunteer work'];
                break;
            case 11:
                card = ['Knight of Cups', 'a Prince Charming', 'romance', 'proposals'];
                break;
            case 12:
                card = ['Queen of Cups', 'a nurturing person', 'healing', 'support'];
                break;
            case 13:
                card = ['King of Cups', 'a supportive leader', 'tolerance', 'empathy'];
                break;
            case 14:
                card = ['Ace of Pentacles', 'a new job', 'a promotion', 'new income'];
                break;
            case 15:
                card = ['Two of Pentacles', 'two choices', 'multi-tasking', 'weighing many options'];
                break;
            case 16:
                card = ['Three of Pentacles', 'teamwork', 'collaboration', 'craftsmanship'];
                break;
            case 17:
                card = ['Four of Pentacles', 'greed', 'desire', 'long-term financial security'];
                break;
            case 18:
                card = ['Five of Pentacles', 'poverty', 'ill health', 'worry'];
                break;
            case 19:
                card = ['Six of Pentacles', 'help', 'generosity', 'reciprocation'];
                break;
            case 20:
                card = ['Seven of Pentacles', 'patience', 'hard work', 'delayed success'];
                break;
            case 21:
                card = ['Eight of Pentacles', 'mastering your craft', 'enjoying your employment', 'feeling fulfilled'];
                break;
            case 22:
                card = ['Nine of Pentacles', 'luxury', 'self-sufficience', 'financial gain'];
                break;
            case 23:
                card = ['Ten of Pentacles', 'leaving a legacy', 'retirement', 'inheritance'];
                break;
            case 24:
                card = ['Page of Pentacles', 'patience', 'a new job', 'financial gain'];
                break;
            case 25:
                card = ['Knight of Pentacles', 'a reliable person', 'patience', 'hard work'];
                break;
            case 26:
                card = ['Queen of Pentacles', 'a resourceful person', 'fertility', 'domesticity'];
                break;
            case 27:
                card = ['King of Pentacles', 'a solid and practical leader', 'wise investment', 'financial success'];
                break;
            case 28:
                card = ['Ace of Swords', 'new ideas', 'new conflict', 'surgery'];
                break;
            case 29:
                card = ['Two of Swords', 'compromise', 'making a decision', 'a crossroads'];
                break;
            case 30:
                card = ['Three of Swords', 'heartbreak', 'divorce', 'loss'];
                break;
            case 31:
                card = ['Four of Swords', 'rest', 'renewal', 'recovery'];
                break;
            case 32:
                card = ['Five of Swords', 'theft', 'violence', 'abuse'];
                break;
            case 33:
                card = ['Six of Swords', 'a necessary transition', 'relocation', 'moving'];
                break;
            case 34:
                card = ['Seven of Swords', 'betrayal', 'dishonesty', 'escape'];
                break;
            case 35:
                card = ['Eight of Swords', 'self-imposed restrictions', 'isolation', 'imprisonment'];
                break;
            case 36:
                card = ['Nine of Swords', 'nightmares', 'anxiety', 'depression'];
                break;
            case 37:
                card = ['Ten of Swords', 'a complete and painful ending', 'rock bottom', 'catastrophe'];
                break;
            case 38:
                card = ['Page of Swords', 'curiosity', 'gossip', 'spies'];
                break;
            case 39:
                card = ['Knight of Swords', 'a fast-talking person', 'a lifestyle change', 'a new direction'];
                break;
            case 40:
                card = ['Queen of Swords', 'a self-sufficient person', 'total honesty', 'truth'];
                break;
            case 41:
                card = ['King of Swords', 'an intentional leader', 'strategy', 'a purpose'];
                break;
            case 42:
                card = ['Ace of Wands', 'a new project', 'inspiration', 'the urge to create'];
                break;
            case 43:
                card = ['Two of Wands', 'waiting for results', 'making a choice', 'travel plans'];
                break;
            case 44:
                card = ['Three of Wands', 'teamwork', 'commerce', 'expansion'];
                break;
            case 45:
                card = ['Four of Wands', 'homecoming', 'celebrations', 'family and friends'];
                break;
            case 46:
                card = ['Five of Wands', 'rivalry', 'challenges', 'obstacles'];
                break;
            case 47:
                card = ['Six of Wands', 'victory', 'an award', 'recognition'];
                break;
            case 48:
                card = ['Seven of Wands', 'self-defense', 'protect against competition', 'a shield'];
                break;
            case 49:
                card = ['Eight of Wands', 'speed', 'action', 'immediate change'];
                break;
            case 50:
                card = ['Nine of Wands', 'keeping and maintaining boundaries', 'persistence', 'self-preservation'];
                break;
            case 51:
                card = ['Ten of Wands', 'stress', 'exhaustion', 'too many burdens'];
                break;
            case 52:
                card = ['Page of Wands', 'being active', 'a new project', 'a creative idea'];
                break;
            case 53:
                card = ['Knight of Wands', 'a lusty person', 'creativity', 'free-spiritedness'];
                break;
            case 54:
                card = ['Queen of Wands', 'a feisty person', 'confidence', 'self-assurance'];
                break;
            case 55:
                card = ['King of Wands', 'a bold leader', 'power', 'courage'];
                break;
            case 56:
                card = ['The Fool', 'fresh hope', 'new beginnings', 'taking chances'];
                break;
            case 57:
                card = ['The Magician', 'focused creativity', 'turning visions into reality', 'inspired action'];
                break;
            case 58:
                card = ['The High Priestess', 'secrets', 'mystery', 'intuition'];
                break;
            case 59:
                card = ['The Empress', 'fertility', 'creation', 'pregnancy'];
                break;
            case 60:
                card = ['The Emperor', 'respect', 'strategic planning', 'a father figure'];
                break;
            case 61:
                card = ['The Hierophant', 'traditions', 'conventional expectations', 'conformity'];
                break;
            case 62:
                card = ['The Lovers', 'partnership', 'a choice', 'the strength of two people together'];
                break;
            case 63:
                card = ['The Chariot', 'action and change', 'a journey', 'a new vehicle'];
                break;
            case 64:
                card = ['Strength', 'self-love', 'self-respect', 'courage'];
                break;
            case 65:
                card = ['The Hermit', 'self-introspection', 'a quest for personal truth', 'spiritual illumination'];
                break;
            case 66:
                card = ['The Wheel of Fortune', 'good fortune', 'a turning point', 'luck'];
                break;
            case 67:
                card = ['Justice', 'cause and effect', 'a win-win situation', 'a revelation'];
                break;
            case 68:
                card = ['The Hanged Man', 'wisdom', 'self-sacrifice', 'a different perspective'];
                break;
            case 69:
                card = ['Death', 'big changes', 'rebirth', 'a new direction'];
                break;
            case 70:
                card = ['Temperance', 'balance', 'patience', 'moderation'];
                break;
            case 71:
                card = ['The Devil', 'addiction', 'greed', 'envy'];
                break;
            case 72:
                card = ['The Tower', 'ruin', 'disgrace', 'unwanted change'];
                break;
            case 73:
                card = ['The Star', 'renewal', 'hope', 'miracles'];
                break;
            case 74:
                card = ['The Moon', 'unseen problems', 'voluntary change', 'intuition'];
                break;
            case 75:
                card = ['The Sun', 'material happiness', 'success', 'a joyous outcome'];
                break;
            case 76:
                card = ['Judgement', 'clarity', 'a final decision', 'purpose'];
                break;
            case 77:
                card = ['The World', 'completing a goal', 'success', 'travel'];
                break;
        };
        return card;
    };

// Return different reading types.
const ppfReading = (card1, card2, card3, name) => {
    return `Your first card is ${card1[0]}. ${name}, your past is full of ${card1[1]} and ${card1[2]}. Your second card is ${card2[0]}. You are experiencing a lot of ${card2[1]} lately, and want ${card2[3]}. Your last card is ${card3[0]}. Expect to see ${card3[2]} in your future.`
};
const dailyReading = (card1, card2, card3, name) => {
    return `Your first card is ${card1[0]}. Be aware of ${card1[2]} and ${card1[3]} today. Your second card is ${card2[0]}. What you need to do today is linked to ${card2[1]}, ${card2[2]} and ${card2[3]}. Your last card is ${card3[0]}. Let go of ${card3[1]} today, ${name}.`
};
const loveReading = (card1, card2, card3, name) => {
    return `${card1[0]} represents you, ${name}. Look for ${card1[1]} and ${card1[3]} within yourself and what you want. ${card2[0]} represents your other half. Do you see ${card2[1]} in them or their desires? ${card3[0]} represents your relationship. Expect ${card3[1]} and ${card3[3]} as your relationship progresses.`
};
const problemReading = (card1, card2, card3, name) => {
    return `Your first card is ${card1[0]}. Your problem revolves around ${card1[1]}. Your second card is ${card2[0]}. ${name}, ${card2[2]} is stopping you from resolving the problem. Your last card is ${card3[0]}. The solution to your problem lies in ${card3[2]}.`
};
const guidanceReading = (card1, card2, card3, name) => {
    return `Your first card is ${card1[0]}. The positives of your situation: ${card1[1]}, ${card1[2]}, and ${card1[3]}. Your second card is ${card2[0]}. The negatives of your situation: ${card2[1]}, ${card2[2]}, and ${card2[3]}. Your last card is ${card3[0]}. Progress with ${card3[2]}, and you fill find your answers, ${name}.`
};

// Identify if a name & type has been inputted.
function conductReading() {
if (!userName) {
    if (!readingType) {
        userName = "Friend";
        readingType = randomType(); 
    } else {
        userName = "Friend";
    };
} else if (!readingType) {
        readingType = randomType(); 
};
    let firstCardGen = generateCard();
    let secondCardGen = generateCard(firstCardGen);
    let thirdCardGen = generateCard(firstCardGen, secondCardGen);
    let firstCard = defineCard(firstCardGen);
    let secondCard = defineCard(secondCardGen);
    let thirdCard = defineCard(thirdCardGen);

    switch (readingType) {
        case 'ppf':
            result = ppfReading(firstCard, secondCard, thirdCard, userName);
            break;
        case 'daily':
            result = dailyReading(firstCard, secondCard, thirdCard, userName);
            break;
        case 'love':
            result = loveReading(firstCard, secondCard, thirdCard, userName);
            break;
        case 'problem':
            result = problemReading(firstCard, secondCard, thirdCard, userName);
            break;
        case 'guidance':
            result = guidanceReading(firstCard, secondCard, thirdCard, userName);
            break;
    };
    instruction.innerHTML = '<p>The cards have spoken.</p>'
    notif.innerHTML = '<p>' + result + '</p>';
};

conductReading();