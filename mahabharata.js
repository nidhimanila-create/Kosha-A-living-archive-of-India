/* =========================================
   KOSHA — MAHABHARATA
   Character + Place Data
   ========================================= */


/* =========================================
   CHARACTER DATA
   ========================================= */
   console.log("Mahabharata JS is working!");

const characters = {

    Krishna: {

        role:
            "Guide, strategist, statesman, and spiritual teacher.",

        relationships:
            "Krishna is closely connected with the Pandavas and is especially associated with Arjuna as his friend, guide, and charioteer. He is also related to the Yadava tradition and is a key figure in the wider Mahabharata narrative.",

        events:
            "Krishna plays a central role before and during the Kurukshetra war. He serves as Arjuna's charioteer and helps guide the Pandavas through difficult political and moral choices.",

        stories:
            "The Bhagavad Gita conversation between Krishna and Arjuna is one of the most influential episodes associated with the Mahabharata. Krishna's diplomatic efforts to avoid war and his strategic guidance during the conflict are also central to the epic.",

        significance:
            "Krishna is one of the most influential figures in Indian religious and philosophical traditions. His teachings in the Bhagavad Gita have shaped discussions of duty, action, devotion, and ethical responsibility."
    },


    Arjuna: {

        role:
            "Pandava warrior, archer, and central hero of the Kurukshetra narrative.",

        relationships:
            "Arjuna is the son of Pandu and Kunti in the epic tradition. He is one of the five Pandava brothers, husband of Draupadi, and friend and devotee of Krishna.",

        events:
            "Arjuna's major episodes include his training under Dronacharya, the exile of the Pandavas, the events leading to the Kurukshetra war, and his role as a principal warrior during the conflict.",

        stories:
            "The Bhagavad Gita begins with Arjuna's moral crisis before the battle. Other famous episodes include his extraordinary archery, his acquisition of divine weapons, and his participation in major battles.",

        significance:
            "Arjuna is often portrayed as a symbol of skill, discipline, doubt, and the search for moral clarity. His dialogue with Krishna remains central to Indian philosophical traditions."
    },


    Yudhishthira: {

        role:
            "Eldest Pandava, king, and figure strongly associated with dharma.",

        relationships:
            "Yudhishthira is the eldest of the five Pandava brothers. He is the son of Pandu and Kunti in the epic tradition and is the husband of Draupadi.",

        events:
            "His story includes the dice game, exile, return to the political struggle, and leadership during and after the Kurukshetra war.",

        stories:
            "The dice game and its consequences are among the most important episodes involving Yudhishthira. His commitment to truth and difficult decisions concerning duty are recurring themes.",

        significance:
            "Yudhishthira represents the complexity of dharma. His character raises questions about truth, responsibility, kingship, and the consequences of moral choices."
    },


    Bhima: {

        role:
            "Pandava warrior celebrated for extraordinary physical strength.",

        relationships:
            "Bhima is one of the five Pandava brothers and the son of Pandu and Kunti in the epic tradition. He is a brother of Arjuna, Yudhishthira, Nakula, and Sahadeva.",

        events:
            "Bhima participates in the Pandavas' exile, encounters numerous adversaries, and becomes one of the strongest warriors on the Pandava side during the Kurukshetra war.",

        stories:
            "Famous episodes include his encounters with demons and warriors, his rivalry with Duryodhana, and their final mace duel.",

        significance:
            "Bhima is remembered for strength, courage, loyalty, and determination. His character also demonstrates the tension between justice, anger, and vengeance."
    },


    Nakula: {

        role:
            "Pandava prince known for skill, grace, and expertise with horses.",

        relationships:
            "Nakula is one of the younger Pandavas and the son of Madri and the Ashvin twins according to the epic tradition. He is the twin brother of Sahadeva.",

        events:
            "Nakula participates in the Pandavas' exile, military campaigns, and the Kurukshetra war. He is also associated with expertise in horses.",

        stories:
            "Stories involving Nakula frequently emphasize his appearance, skill, loyalty to his brothers, and abilities as a warrior and horseman.",

        significance:
            "Nakula contributes to the epic's portrayal of the Pandavas as a group whose different skills complement one another."
    },


    Sahadeva: {

        role:
            "Youngest Pandava, warrior, and figure associated with wisdom and knowledge.",

        relationships:
            "Sahadeva is the twin brother of Nakula and one of the five Pandavas. He is traditionally described as the son of Madri and the Ashvin twins.",

        events:
            "Sahadeva takes part in the Pandavas' exile, military campaigns, and the Kurukshetra war.",

        stories:
            "He is frequently portrayed as intelligent and perceptive. Some traditions also emphasize his knowledge of astrology and his ability to understand events before they occur.",

        significance:
            "Sahadeva represents knowledge, loyalty, and quiet strength within the Pandava group."
    },


    Draupadi: {

        role:
            "Queen of the Pandavas and one of the central figures of the Mahabharata.",

        relationships:
            "Draupadi is traditionally described as the daughter of King Drupada. She becomes the wife of the five Pandavas and is closely connected with Krishna.",

        events:
            "Major events include her emergence from the sacrificial fire, marriage to the Pandavas, the dice game, her humiliation in the Kuru court, exile, and the events surrounding the Kurukshetra war.",

        stories:
            "The dice-hall episode is one of the most powerful and widely remembered stories involving Draupadi. Her questioning of the assembly becomes an important moral moment in the epic.",

        significance:
            "Draupadi is a major symbol of dignity, resilience, agency, and the consequences of injustice. She has inspired many literary, theatrical, and artistic interpretations."
    },


    Karna: {

        role:
            "Great warrior known for generosity, courage, and complex loyalties.",

        relationships:
            "Karna is traditionally described as the son of Kunti and the solar deity Surya. He becomes a close friend and ally of Duryodhana and is later revealed to have a connection to the Pandavas.",

        events:
            "Karna's life includes his difficult social beginnings, rise as a warrior, friendship with Duryodhana, participation in the Kurukshetra war, and final confrontation with Arjuna.",

        stories:
            "His legendary generosity, relationship with Duryodhana, encounter with Kunti, and final battle with Arjuna are among the best-known stories.",

        significance:
            "Karna is one of the epic's most complex figures. His story explores identity, social status, loyalty, generosity, friendship, and difficult moral choices."
    },


    Duryodhana: {

        role:
            "Eldest Kaurava prince and principal rival of the Pandavas.",

        relationships:
            "Duryodhana is the eldest son of Dhritarashtra and Gandhari. He is a cousin and political rival of the Pandavas and a close friend of Karna.",

        events:
            "His story includes the rivalry with the Pandavas, political struggles over the kingdom, the dice game, opposition to peace efforts, and leadership of the Kaurava forces during the war.",

        stories:
            "The rivalry between Duryodhana and the Pandavas is one of the central conflicts of the epic. His final mace duel with Bhima is another major episode.",

        significance:
            "Duryodhana represents ambition, pride, loyalty, and the destructive consequences of rivalry and attachment to power."
    },


    Bhishma: {

        role:
            "Elder statesman, warrior, and powerful figure of the Kuru dynasty.",

        relationships:
            "Bhishma is the son of King Shantanu and Ganga according to the epic tradition. He becomes the guardian of the Kuru royal family.",

        events:
            "His major events include his famous vow, his lifelong service to the Kuru dynasty, and his leadership of the Kaurava army during the early stages of the war.",

        stories:
            "The story of Bhishma's terrible vow and his fall on the battlefield are among the most famous episodes associated with him.",

        significance:
            "Bhishma represents duty, sacrifice, loyalty, and the moral complications that arise when personal vows conflict with broader justice."
    },


    Dronacharya: {

        role:
            "Military teacher of the Kuru and Pandava princes.",

        relationships:
            "Dronacharya is the teacher of both the Pandavas and Kauravas. Arjuna is particularly associated with him as his exceptional student.",

        events:
            "Drona trains the princes in warfare and later becomes a major commander during the Kurukshetra war.",

        stories:
            "His relationship with Arjuna, the story of Ekalavya, and his role during the war are among the best-known episodes.",

        significance:
            "Drona's story explores teaching, ambition, loyalty, social hierarchy, and the responsibilities of a teacher and warrior."
    },


    Shakuni: {

        role:
            "Prince of Gandhara and influential figure in the Kaurava political struggle.",

        relationships:
            "Shakuni is traditionally described as Gandhari's brother and therefore an uncle of the Kaurava princes. He is closely associated with Duryodhana.",

        events:
            "He plays an important role in the political conflict surrounding the dice game and the rivalry between the Kauravas and Pandavas.",

        stories:
            "The dice game in which Yudhishthira loses his kingdom and possessions is strongly associated with Shakuni in popular retellings.",

        significance:
            "Shakuni is often portrayed as a symbol of political manipulation, strategy, revenge, and the dangerous use of intelligence without ethical restraint."
    },


    Gandhari: {

        role:
            "Queen of Hastinapura and mother of the Kauravas.",

        relationships:
            "Gandhari is the wife of Dhritarashtra and mother of the Kaurava princes, including Duryodhana.",

        events:
            "Her life is shaped by the political conflict of the Kuru family, the Kurukshetra war, and the deaths of her sons.",

        stories:
            "Her decision to blindfold herself, her relationship with her sons, and her grief after the war are among the most remembered episodes.",

        significance:
            "Gandhari represents sacrifice, motherhood, grief, moral complexity, and the consequences of destructive conflict."
    },


    Dhritarashtra: {

        role:
            "King of Hastinapura and father of the Kauravas.",

        relationships:
            "Dhritarashtra is the husband of Gandhari and father of the Kaurava princes. He is the uncle of the Pandavas.",

        events:
            "His reign is dominated by the rivalry between his sons and the Pandavas. His attachment to Duryodhana influences many decisions surrounding the conflict.",

        stories:
            "His conversations with Sanjaya before and during the war are important narrative sections. His emotional response to the destruction of his family is also significant.",

        significance:
            "Dhritarashtra illustrates the tension between personal attachment, political responsibility, and the duties of kingship."
    },


    Abhimanyu: {

        role:
            "Young warrior and son of Arjuna and Subhadra.",

        relationships:
            "Abhimanyu is the son of Arjuna and Subhadra and the nephew of Krishna. He is also connected to the wider Pandava family.",

        events:
            "He participates in the Kurukshetra war and becomes famous for entering the Chakravyuha battle formation.",

        stories:
            "The story of Abhimanyu entering the Chakravyuha and fighting despite being unable to complete the method of escape is one of the most emotionally powerful episodes of the epic.",

        significance:
            "Abhimanyu is remembered for courage, youth, sacrifice, and the tragic cost of war."
    }

};


/* =========================================
   OPEN CHARACTER MODAL
   ========================================= */

function openCharacter(name) {

    const character = characters[name];

    if (!character) {
        return;
    }


    document.getElementById("characterModalTitle").textContent = name;

    document.getElementById("characterModalRole").textContent =
        character.role;

    document.getElementById("characterRelationships").textContent =
        character.relationships;

    document.getElementById("characterEvents").textContent =
        character.events;

    document.getElementById("characterStories").textContent =
        character.stories;

    document.getElementById("characterSignificance").textContent =
        character.significance;


    document.getElementById("characterModal").style.display = "flex";

    document.body.style.overflow = "hidden";
}


/* =========================================
   CLOSE CHARACTER MODAL
   ========================================= */

function closeCharacter() {

    document.getElementById("characterModal").style.display = "none";

    document.body.style.overflow = "";
}


/* =========================================
   PLACE DATA
   ========================================= */

const places = {

    Kurukshetra: {

        evidence:
            "Traditional association",

        story:
            "Kurukshetra is traditionally identified as the setting of the great war between the Pandavas and Kauravas. It is also the setting associated with Krishna's dialogue with Arjuna before the battle.",

        culture:
            "Kurukshetra remains an important pilgrimage and cultural landscape associated with the Mahabharata and the Bhagavad Gita.",

        history:
            "The region has a long archaeological and historical record, but archaeological evidence should not be treated as direct proof of the Mahabharata war as narrated in the epic.",

        visit:
            "Kurukshetra is a living cultural destination in present-day Haryana with temples, pilgrimage sites, museums, and other attractions."
    },


    Hastinapur: {

        evidence:
            "Traditional + archaeological interest",

        story:
            "Hastinapur is traditionally described as the capital of the Kuru kingdom and the political centre of much of the Mahabharata narrative.",

        culture:
            "The present-day town is associated with Jain, Hindu, and Mahabharata traditions and contains several religious sites.",

        history:
            "Archaeological excavations in and around Hastinapur have produced evidence of ancient settlements. This evidence provides historical context but does not independently prove every event described in the epic.",

        visit:
            "Hastinapur can be visited today in Uttar Pradesh and is known for its religious and archaeological significance."
    },


    Indraprastha: {

        evidence:
            "Traditional association",

        story:
            "Indraprastha is described in the Mahabharata as the city established for the Pandavas. Later traditions connect it with the Delhi region.",

        culture:
            "The Indraprastha tradition forms part of Delhi's layered cultural and historical identity.",

        history:
            "The exact identification of the epic Indraprastha with a specific archaeological site remains a matter of historical interpretation rather than established fact.",

        visit:
            "Visitors to Delhi can explore sites and museums connected with the city's ancient and medieval history, while the Mahabharata association should be understood as a tradition."
    },


    Dwarka: {

        evidence:
            "Religious + archaeological interest",

        story:
            "Dwarka is traditionally associated with Krishna and is described in epic and later religious traditions as an important city connected with him.",

        culture:
            "Dwarka is one of India's major pilgrimage destinations and is especially important within Krishna traditions.",

        history:
            "Archaeological discoveries around the coastal region of Dwarka have generated considerable scholarly interest, but they should not automatically be interpreted as direct confirmation of the epic narrative.",

        visit:
            "Modern Dwarka in Gujarat is a major pilgrimage destination with temples and coastal heritage sites."
    },


    Mathura: {

        evidence:
            "Religious + cultural association",

        story:
            "Mathura is strongly associated with Krishna traditions and forms part of the wider cultural world surrounding Krishna's life and the Yadava traditions.",

        culture:
            "Mathura is one of India's important sacred and artistic centres, especially for Krishna worship and devotional traditions.",

        history:
            "Mathura has a well-established archaeological and historical record extending across many centuries.",

        visit:
            "Mathura is a major pilgrimage destination with temples, museums, archaeological collections, and cultural sites."
    },


    Badrinath: {

        evidence:
            "Traditional association",

        story:
            "The Himalayan region around Badrinath is connected with several Pandava traditions, especially stories concerning their journey through the mountains.",

        culture:
            "The region forms part of the sacred Himalayan landscape and is important in pilgrimage traditions.",

        history:
            "The Pandava associations belong primarily to religious and oral traditions and should be distinguished from independently established historical evidence.",

        visit:
            "The Badrinath region is accessible as a major pilgrimage destination in Uttarakhand, although mountain travel requires seasonal planning."
    }

};


/* =========================================
   OPEN PLACE MODAL
   ========================================= */

function openPlace(name) {

    const place = places[name];

    if (!place) {
        return;
    }


    document.getElementById("placeModalTitle").textContent = name;

    document.getElementById("placeModalEvidence").textContent =
        place.evidence;

    document.getElementById("placeStory").textContent =
        place.story;

    document.getElementById("placeCulture").textContent =
        place.culture;

    document.getElementById("placeHistory").textContent =
        place.history;

    document.getElementById("placeVisit").textContent =
        place.visit;


    document.getElementById("placeModal").style.display = "flex";

    document.body.style.overflow = "hidden";
}


/* =========================================
   CLOSE PLACE MODAL
   ========================================= */

function closePlace() {

    document.getElementById("placeModal").style.display = "none";

    document.body.style.overflow = "";
}


/* =========================================
   CLOSE MODALS WHEN CLICKING BACKDROP
   ========================================= */

document.addEventListener("click", function (event) {

    const characterModal =
        document.getElementById("characterModal");

    const placeModal =
        document.getElementById("placeModal");


    if (event.target === characterModal) {
        closeCharacter();
    }


    if (event.target === placeModal) {
        closePlace();
    }

});


/* =========================================
   ESC KEY CLOSES MODAL
   ========================================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeCharacter();

        closePlace();

    }

});
// =====================================================
// WATCH EXPERIENCE
// =====================================================

function openWatchExperience() {

    document.getElementById("watchExperienceModal").style.display = "flex";

    document.body.style.overflow = "hidden";
}


function closeWatchExperience() {

    document.getElementById("watchExperienceModal").style.display = "none";

    document.body.style.overflow = "";
}