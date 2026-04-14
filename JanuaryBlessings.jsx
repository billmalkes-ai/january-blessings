import { useState, useEffect } from "react";

const days = [
  {
    day: 1, arc: "In the Beginning, Food", theme: "The Garden Before the Hunger", reference: "Genesis 2:8–9",
    passage: "Now the Lord God had planted a garden in the east, in Eden; and there he put the man he had formed. The Lord God made all kinds of trees grow out of the ground — trees that were pleasing to the eye and good for food.",
    framing: "The first home God made for his people was a garden planted before they arrived to live in it. He designed the trees to be pleasing to the eye and good for food at the same time, which tells us something about the kind of provider he is. Beauty and sustenance belonged together from the first day.",
    prayerOpen: "Lord,",
    prayerBody: ["You planted the garden before we arrived.", "Before hunger, before need.", "What we receive was already given.", "Teach us to see it, and to remember where it comes from."],
    prayerClose: "In Jesus' Holy Name, Amen."
  },
  {
    day: 2, arc: "In the Beginning, Food", theme: "The God Who Tends", reference: "Genesis 1:29–30",
    passage: "Then God said, 'I give you every seed-bearing plant on the face of the whole earth and every tree that has fruit with seed in it. They will be yours for food. And to all the beasts of the earth and all the birds in the sky and all the creatures that move along the ground — everything that has the breath of life in it — I give every green plant for food.' And it was so.",
    framing: "God spoke these words on the sixth day, before the first human hunger had ever been felt. The gift of food preceded the need for it, which is the pattern God established at the beginning of his relationship with his creatures. Every meal we eat is an answer to a question asked before we existed.",
    prayerOpen: "Lord,",
    prayerBody: ["Hands planted, harvested, and prepared this food, but it began with You.", "Every step traces back to Your care.", "Teach us to receive this as Your provision."],
    prayerClose: "In Jesus' Holy Name, Amen."
  },
  {
    day: 3, arc: "In the Beginning, Food", theme: "A Garden Prepared", reference: "Genesis 2:15",
    passage: "The Lord God took the man and put him in the Garden of Eden to work it and take care of it.",
    framing: "God gave his people both the food and the work of tending it. The garden required cultivation, which means every meal we eat carries the labor of human hands alongside the gift of God's creation. Gratitude for a meal belongs to both the one who gave the ground and the ones who worked it.",
    prayerOpen: "Lord,",
    prayerBody: ["You made what sustains us also beautiful.", "This table carries both.", "Teach us not to miss either."],
    prayerClose: "In Jesus' Holy Name, Amen."
  },
  {
    day: 4, arc: "In the Beginning, Food", theme: "Every Good Gift", reference: "Genesis 1:31",
    passage: "God saw all that he had made, and it was very good. And there was evening, and there was morning — the sixth day.",
    framing: "When God looked at the world he had made, including all the food he had prepared for his creatures, his verdict was that it was very good. The food on this table tonight participates in that original goodness. We eat from a world God himself called good.",
    prayerOpen: "Lord,",
    prayerBody: ["We trace this meal back to You.", "Nothing good stands on its own.", "Everything we receive has Your mark on it."],
    prayerClose: "In Jesus' Holy Name, Amen."
  },
  {
    day: 5, arc: "In the Beginning, Food", theme: "The Lord Will Provide", reference: "Genesis 2:10",
    passage: "A river watering the garden flowed from Eden; from there it was separated into four headwaters.",
    framing: "God built water into the garden's design before anyone arrived to drink from it. The infrastructure of provision was already in place, running through the garden before the first thirst. He is the kind of provider who thinks ahead for his people.",
    prayerOpen: "Lord,",
    prayerBody: ["You provided before Abraham understood the provision.", "You are already ahead of what we see.", "Teach us to trust You at this table."],
    prayerClose: "In Jesus' Holy Name, Amen."
  },
  {
    day: 6, arc: "In the Beginning, Food", theme: "Eyes That Wait", reference: "Genesis 2:2–3",
    passage: "By the seventh day God had finished the work he had been doing; so on the seventh day he rested from all his work. Then God blessed the seventh day and made it holy, because on it he rested from all the work of creating that he had done.",
    framing: "God completed the work of provision and then rested, which means the table was fully set before the Sabbath began. The first week of creation ended with everything needed already in place. A meal eaten with rest in view is a small participation in that original pattern.",
    prayerOpen: "Lord,",
    prayerBody: ["All creation looks to You, and so do we.", "You open Your hand, and we are filled.", "Teach us to notice before we eat."],
    prayerClose: "In Jesus' Holy Name, Amen."
  },
  {
    day: 7, arc: "The Names of God Who Gives", theme: "Food for All Flesh", reference: "Genesis 17:1",
    passage: "When Abram was ninety-nine years old, the Lord appeared to him and said, 'I am God Almighty; walk before me faithfully and be blameless.'",
    framing: "El Shaddai, the name God spoke to Abraham, carries the meaning of the God who is more than enough. He appeared at a moment when Abraham's own resources had long run out and introduced himself by the name that most directly addresses that condition. The name that sustained Abraham is the same name behind every meal we receive.",
    prayerOpen: "Lord,",
    prayerBody: ["Your love endures, and it takes form in what You provide.", "Tonight, it looks like this meal.", "We receive it with clear eyes."],
    prayerClose: "In Jesus' Holy Name, Amen."
  },
  {
    day: 8, arc: "The Names of God Who Gives", theme: "Bread from Heaven", reference: "Genesis 22:13–14",
    passage: "Abraham looked up and there in a thicket he saw a ram caught by its horns. He went over and took the ram and sacrificed it as a burnt offering instead of his son. So Abraham called that place 'The Lord Will Provide.' And to this day it is said, 'On the mountain of the Lord it will be provided.'",
    framing: "Abraham named the mountain after what God did there, and that name has been passed down through generations as a declaration of God's character. Jehovah-Jireh: the Lord who sees what is needed and provides it from a direction no one was watching. The name is still true at every table where grateful people eat.",
    prayerOpen: "Lord,",
    prayerBody: ["You provide in ways we do not always understand.", "Still, You provide.", "Teach us to receive without pride and without question."],
    prayerClose: "In Jesus' Holy Name, Amen."
  },
  {
    day: 9, arc: "The Names of God Who Gives", theme: "Daily", reference: "Psalm 23:1–2",
    passage: "The Lord is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters.",
    framing: "David opened this psalm with a declaration that functions as a summary of what it means to know God as provider. The shepherd image holds both tender care and practical provision in the same picture. Green pastures and quiet waters describe the real conditions in which creatures are fed, watered, and kept whole.",
    prayerOpen: "Lord,",
    prayerBody: ["We come again today, asking again.", "You have never turned us away.", "We receive what You give, again."],
    prayerClose: "In Jesus' Holy Name, Amen."
  },
  {
    day: 10, arc: "The Names of God Who Gives", theme: "More Than Bread", reference: "Psalm 145:15–16",
    passage: "The eyes of all look to you, and you give them their food at the proper time. You open your hand and satisfy the desires of every living thing.",
    framing: "The psalm pictures God's provision as an open hand, which is the posture of a giver rather than a dispenser. Every creature turns its eyes upward at the hour of hunger, and the hand opens. This table tonight is one instance of a gesture God has been making since the first day of creation.",
    prayerOpen: "Lord,",
    prayerBody: ["This table feeds the body, but we need more than that.", "Your Word sustains what food cannot reach.", "Feed us fully tonight."],
    prayerClose: "In Jesus' Holy Name, Amen."
  },
  {
    day: 11, arc: "The Names of God Who Gives", theme: "Water from the Rock", reference: "Genesis 16:13",
    passage: "She gave this name to the Lord who spoke to her: 'You are the God who sees me,' for she said, 'I have now seen the One who sees me.'",
    framing: "Hagar spoke these words in the wilderness, alone and without resources, and what she discovered was that God had been watching the whole time. El Roi, the God who sees, is the name she gave him. He sees every table where people gather to eat, including the ones that are sparse and the ones where someone sits alone.",
    prayerOpen: "Lord,",
    prayerBody: ["You provide from places we would never look.", "Nothing limits Your provision.", "Give us eyes to recognize it tonight."],
    prayerClose: "In Jesus' Holy Name, Amen."
  },
  {
    day: 12, arc: "The Names of God Who Gives", theme: "The Angel's Touch", reference: "Psalm 103:1–2, 5",
    passage: "Praise the Lord, my soul; all my inmost being, praise his holy name. Praise the Lord, my soul, and forget not all his benefits. Who satisfies your desires with good things so that your youth is renewed like the eagle's.",
    framing: "David's instruction to his own soul was to remember all the benefits of knowing God, and near the top of that list stands the one who satisfies with good things. The word satisfies here carries the weight of complete fulfillment, the sense of a hunger fully met. Every meal eaten with gratitude is an act of remembering this.",
    prayerOpen: "Lord,",
    prayerBody: ["When we are worn down, You still provide.", "You set a table when we have nothing left.", "We receive this knowing we needed it."],
    prayerClose: "In Jesus' Holy Name, Amen."
  },
  {
    day: 13, arc: "When the Cupboard Looks Empty", theme: "The Jar That Did Not Run Out", reference: "Genesis 22:1–2, 8",
    passage: "Some time later God tested Abraham. He said to him, 'Abraham!' 'Here I am,' he replied. Then God said, 'Take your son, your only son, whom you love — Isaac — and go to the region of Moriah. Sacrifice him there as a burnt offering on a mountain I will show you.' Abraham answered, 'God himself will provide the lamb for the burnt offering, my son.'",
    framing: "Abraham answered his son's question with a statement of faith he could not yet verify. God himself will provide. He said it before he could see how it was true, which is what trust in a provider looks like before the provision arrives. We eat tonight on the far side of that same declaration.",
    prayerOpen: "Lord,",
    prayerBody: ["We fear there will not be enough.", "You have proven otherwise, again and again.", "Teach us to trust what You sustain."],
    prayerClose: "In Jesus' Holy Name, Amen."
  },
  {
    day: 14, arc: "When the Cupboard Looks Empty", theme: "The Finest Wheat", reference: "Genesis 26:1–3, 12",
    passage: "Now there was a famine in the land — besides the previous famine in Abraham's time — and Isaac went to Abimelek king of the Philistines in Gerar. The Lord appeared to Isaac and said, 'Do not go down to Egypt; live in the land where I tell you to live. Stay in this land for a while, and I will be with you and will bless you.' Isaac planted crops in that land and the same year reaped a hundredfold, because the Lord blessed him.",
    framing: "God told Isaac to stay in the famine land and plant crops there. The harvest of a hundredfold came from ground that looked unlikely to yield anything. God regularly chooses the circumstances that seem least suited to abundance as the place where he demonstrates what abundance actually means.",
    prayerOpen: "Lord,",
    prayerBody: ["You do not give what is left over.", "You give what is good.", "We sit here humbled by that."],
    prayerClose: "In Jesus' Holy Name, Amen."
  },
  {
    day: 15, arc: "When the Cupboard Looks Empty", theme: "First and Best", reference: "Genesis 28:20–22",
    passage: "Then Jacob made a vow, saying, 'If God will be with me and will watch over me on this journey I am taking and will give me food to eat and clothes to wear so that I return safely to my father's household, then the Lord will be my God.'",
    framing: "Jacob was sleeping on a stone in the open when he made this vow, with nothing but the clothes on his back and a long road ahead. His request was simple: food to eat and clothes to wear. God met him at that level of need and then exceeded it in every direction. The God who answered Jacob's stone-pillow prayer is the same one behind this meal.",
    prayerOpen: "Lord,",
    prayerBody: ["We give thanks before we take a bite.", "This gratitude comes first.", "What we receive follows."],
    prayerClose: "In Jesus' Holy Name, Amen."
  },
  {
    day: 16, arc: "When the Cupboard Looks Empty", theme: "Leave Some Behind", reference: "Genesis 41:53–54, 57",
    passage: "The seven years of abundance in Egypt came to an end, and the seven years of famine began, just as Joseph had said. There was famine in all the other lands, but in the whole land of Egypt there was food. And all the world came to Egypt to buy grain from Joseph, because the famine was severe everywhere.",
    framing: "God gave Joseph the wisdom to store grain during the years of abundance so that people could eat during the years of famine. What looked like administrative planning was actually God feeding the world through one man's obedience. The food that sustained nations came from a prisoner who trusted God in the dark.",
    prayerOpen: "Lord,",
    prayerBody: ["This table is not only for us.", "You have always made room for others.", "Teach us to live with open hands."],
    prayerClose: "In Jesus' Holy Name, Amen."
  },
  {
    day: 17, arc: "When the Cupboard Looks Empty", theme: "Seedtime and Harvest", reference: "1 Kings 17:12–14",
    passage: "'As surely as the Lord your God lives,' she replied, 'I don't have any bread — only a handful of flour in a jar and a little olive oil in a jug. I am gathering a few sticks to take home and make a meal for myself and my son, that we may eat it — and die.' Elijah said to her, 'Don't be afraid. Go home and do as you have said. But first make a small loaf of bread for me from what you have and bring it to me, and then make something for yourself and your son. For this is what the Lord, the God of Israel, says: The jar of flour will not be used up and the jug of oil will not run dry until the day the Lord sends rain on the land.'",
    framing: "The widow planned to use her last flour and oil for a final meal before she and her son faced starvation. God's instruction was to feed the prophet first, which required her to give away from what she had before she could see the promise fulfilled. The jar lasted three years because she acted on trust before she had evidence.",
    prayerOpen: "Lord,",
    prayerBody: ["You have kept Your promise through every season.", "Seedtime and harvest have not failed.", "We eat tonight inside that promise."],
    prayerClose: "In Jesus' Holy Name, Amen."
  },
  {
    day: 18, arc: "When the Cupboard Looks Empty", theme: "The Earth Has Yielded", reference: "Genesis 21:17–19",
    passage: "God heard the boy crying, and the angel of God called to Hagar from heaven and said to her, 'What is the matter, Hagar? Do not be afraid; God has heard the boy crying as he lies there. Lift the boy up and take him by the hand, for I will make him into a great nation.' Then God opened her eyes and she saw a well of water. So she went and filled the skin with water and gave the boy a drink.",
    framing: "Hagar had run out of water in the desert and set her son down at a distance, unable to bear watching him. God heard the boy crying, and what he did was open Hagar's eyes to a well that was already there. God's answer was to give her eyes to see provision that had been in place all along.",
    prayerOpen: "Lord,",
    prayerBody: ["The earth has yielded what You designed it to give.", "This table stands as evidence.", "Let us not ignore what it declares."],
    prayerClose: "In Jesus' Holy Name, Amen."
  },
  {
    day: 19, arc: "The Hand That Opens", theme: "Ask and It Will Be Given", reference: "Matthew 7:7–8, 11",
    passage: "Ask and it will be given to you; seek and you will find; knock and the door will be opened to you. For everyone who asks receives; the one who seeks finds; and to the one who knocks, the door will be opened. If you, then, though you are evil, know how to give good gifts to your children, how much more will your Father in heaven give good gifts to those who ask him!",
    framing: "Jesus built his argument on the logic of parenthood: a good father gives good things to his children. The comparison moves from the lesser to the greater, from human parents who give well despite their limitations to a heavenly Father who gives with neither limitation nor interruption. The food on this table descended from that greater giving.",
    prayerOpen: "Lord,",
    prayerBody: ["You give as a Father gives.", "Not reluctantly, but faithfully.", "We ask, and we receive with trust."],
    prayerClose: "In Jesus' Holy Name, Amen."
  },
  {
    day: 20, arc: "The Hand That Opens", theme: "The Sparrow and the Lily", reference: "Matthew 6:26, 28–30",
    passage: "Look at the birds of the air; they do not sow or reap or store away in barns, and yet your heavenly Father feeds them. Are you not much more valuable than they? And why do you worry about clothes? See how the flowers of the field grow. They do not labor or spin. Yet I tell you that not even Solomon in all his splendor was dressed like one of these. If that is how God clothes the grass of the field, which is here today and tomorrow is thrown into the fire, will he not much more clothe you?",
    framing: "Jesus pointed to birds and wildflowers as evidence that the Father provides for things far less significant than his own children. The argument is proportional: if he feeds sparrows and clothes lilies, his care for us runs deeper still. A meal received with this in mind is an act of agreeing with what Jesus said.",
    prayerOpen: "Lord,",
    prayerBody: ["You feed what cannot provide for itself.", "You care for what does not ask.", "We sit here knowing we are seen."],
    prayerClose: "In Jesus' Holy Name, Amen."
  },
  {
    day: 21, arc: "The Hand That Opens", theme: "Taste and See", reference: "Psalm 34:8",
    passage: "Taste and see that the Lord is good; blessed is the one who takes refuge in him.",
    framing: "David used the language of eating as a description of knowing God. To taste and see is to move from abstract belief to direct experience, the way a person moves from hearing about a meal to sitting down at the table. Every time we eat with gratitude, we are doing what this psalm invites us to do.",
    prayerOpen: "Lord,",
    prayerBody: ["We do not speak of Your goodness only.", "We experience it.", "This table is one more proof."],
    prayerClose: "In Jesus' Holy Name, Amen."
  },
  {
    day: 22, arc: "The Hand That Opens", theme: "My Cup Overflows", reference: "Psalm 23:5",
    passage: "You prepare a table before me in the presence of my enemies. You anoint my head with oil; my cup overflows.",
    framing: "David pictured God setting a table in circumstances that would normally make eating impossible. The table is prepared in the presence of enemies, which means provision and threat occupy the same space. The cup overflows anyway. Abundance arrives on God's terms, independent of whether the surrounding circumstances look favorable.",
    prayerOpen: "Lord,",
    prayerBody: ["You prepare a table even in difficult places.", "Provision does not wait for comfort.", "Our cup overflows, even here."],
    prayerClose: "In Jesus' Holy Name, Amen."
  },
  {
    day: 23, arc: "The Hand That Opens", theme: "He Gives Food to the Hungry", reference: "Psalm 146:7",
    passage: "He upholds the cause of the oppressed and gives food to the hungry. The Lord sets prisoners free.",
    framing: "The psalm places God's feeding of the hungry alongside his liberation of prisoners as two expressions of the same character. He is a God who acts on behalf of people who cannot provide for themselves. Every meal received as a gift rather than an entitlement is an acknowledgment that we depend on that same character.",
    prayerOpen: "Lord,",
    prayerBody: ["You give to those who depend on You.", "Not on their strength, but on Your character.", "We receive this meal in that truth."],
    prayerClose: "In Jesus' Holy Name, Amen."
  },
  {
    day: 24, arc: "The Hand That Opens", theme: "He Satisfies the Thirsty", reference: "Psalm 107:8–9",
    passage: "Let them give thanks to the Lord for his unfailing love and his wonderful deeds for mankind, for he satisfies the thirsty and fills the hungry with good things.",
    framing: "This psalm calls people who have been fed and led out of wilderness to give public thanks for what God has done. The testimony is specific: he satisfies the thirsty and fills the hungry with good things. A meal eaten with gratitude is itself a form of that testimony, a small public declaration that God keeps his word.",
    prayerOpen: "Lord,",
    prayerBody: ["You satisfy what we cannot fill ourselves.", "You meet hunger with good things.", "This table is one more sign of that."],
    prayerClose: "In Jesus' Holy Name, Amen."
  },
  {
    day: 25, arc: "The Hand That Opens", theme: "All Creatures Look to You", reference: "Psalm 104:27–28",
    passage: "All creatures look to you to give them their food at the proper time. When you give it to them, they gather it up; when you open your hand, they are satisfied with good things.",
    framing: "The image in this psalm is of all creation waiting with expectation for the moment when God's hand opens. The satisfaction that follows is complete. We sit at this table as part of that company of creatures, gathered around a provision that comes from the same open hand.",
    prayerOpen: "Lord,",
    prayerBody: ["All living things depend on You.", "We are no different.", "We receive what You have opened Your hand to give."],
    prayerClose: "In Jesus' Holy Name, Amen."
  },
  {
    day: 26, arc: "Bread That Satisfies", theme: "More Than Bread", reference: "Matthew 4:4",
    passage: "Jesus answered, 'It is written: Man shall not live on bread alone, but on every word that comes from the mouth of God.'",
    framing: "Jesus spoke these words while hungry in the wilderness, which gives them particular weight. He had gone without food for forty days, and his answer to the temptation was a declaration about the deeper source of life. The bread on this table points toward something only the Word of God can give.",
    prayerOpen: "Lord,",
    prayerBody: ["Food alone is not enough.", "We need what comes from You.", "Feed us in both body and spirit."],
    prayerClose: "In Jesus' Holy Name, Amen."
  },
  {
    day: 27, arc: "Bread That Satisfies", theme: "I Am the Bread of Life", reference: "John 6:35",
    passage: "Then Jesus declared, 'I am the bread of life. Whoever comes to me will never go hungry, and whoever believes in me will never be thirsty.'",
    framing: "Jesus made the claim that he himself is the fulfillment of what every meal points toward. The bread of life is a title that connects him to the manna in the wilderness, the loaves he multiplied on the hillside, and the bread of the upper room. Every table we sit at exists inside that larger claim.",
    prayerOpen: "Lord,",
    prayerBody: ["Every meal points beyond itself.", "You are the bread that satisfies fully.", "Meet us there tonight."],
    prayerClose: "In Jesus' Holy Name, Amen."
  },
  {
    day: 28, arc: "Bread That Satisfies", theme: "The Bread I Give", reference: "John 6:51",
    passage: "I am the living bread that came down from heaven. Whoever eats this bread will live forever. This bread is my flesh, which I will give for the life of the world.",
    framing: "Jesus connected the giving of himself with the giving of bread, using the same language for both. The bread he gives for the life of the world is his own flesh, which places every meal we eat within a frame of extraordinary cost and extraordinary generosity. We eat tonight from a table whose deepest meaning runs all the way to the cross.",
    prayerOpen: "Lord,",
    prayerBody: ["You gave Yourself for the life of the world.", "This table reminds us of that cost.", "We receive it with awareness."],
    prayerClose: "In Jesus' Holy Name, Amen."
  },
  {
    day: 29, arc: "Bread That Satisfies", theme: "Come, All Who Are Thirsty", reference: "Isaiah 55:1–2",
    passage: "Come, all you who are thirsty, come to the waters; and you who have no money, come, buy and eat! Come, buy wine and milk without money and without cost. Why spend money on what is not bread, and your labor on what does not satisfy? Listen, listen to me, and eat what is good, and you will delight in the richest of fare.",
    framing: "Isaiah's invitation requires nothing in exchange for the feast. Come without money, come without cost, come and eat what is good. The only condition is thirst and the willingness to come. The table God sets operates on a completely different economy than the one we work inside every day.",
    prayerOpen: "Lord,",
    prayerBody: ["Your table is open.", "We bring nothing but need.", "Still, You invite us to eat."],
    prayerClose: "In Jesus' Holy Name, Amen."
  },
  {
    day: 30, arc: "Bread That Satisfies", theme: "The Word Became Flesh", reference: "John 1:14",
    passage: "The Word became flesh and made his dwelling among us. We have seen his glory, the glory of the one and only Son, who came from the Father, full of grace and truth.",
    framing: "The Word became flesh, which means God took on a body that needed to eat, drink, sleep, and be fed by others. He entered the full experience of human hunger and human nourishment. Every meal we share is inhabited by a God who knows from the inside what it is to be hungry and to be fed.",
    prayerOpen: "Lord,",
    prayerBody: ["You entered into hunger and sat at tables like this.", "You know what it is to receive.", "We eat in Your presence."],
    prayerClose: "In Jesus' Holy Name, Amen."
  },
  {
    day: 31, arc: "Bread That Satisfies", theme: "Until That Day", reference: "Luke 22:16–18",
    passage: "For I tell you, I will not eat it again until it finds fulfillment in the kingdom of God. And he took a cup, gave thanks and said, 'Take this and divide it among you. For I tell you I will not drink again from the fruit of the vine until the kingdom of God comes.'",
    framing: "Jesus looked forward from the table he shared with his disciples to a greater table still coming. Every meal we eat this month, and every meal we will ever eat, is set between that table and this one, between the promise made in the upper room and its fulfillment at the feast of the kingdom. We eat in the meantime, with expectation.",
    prayerOpen: "Lord,",
    prayerBody: ["Every table sits between promise and fulfillment.", "We eat now, but not forever like this.", "We wait with hope."],
    prayerClose: "In Jesus' Holy Name, Amen."
  },
];

const arcColors = {
  "In the Beginning, Food":        "#4A3828",
  "The Names of God Who Gives":    "#3A4A38",
  "When the Cupboard Looks Empty": "#5A3E20",
  "The Hand That Opens":           "#384048",
  "Bread That Satisfies":          "#4A3252",
};

export default function JanuaryBlessings() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Cinzel:wght@400;500&display=swap";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const goTo = (i) => {
    if (i === current) return;
    setFade(false);
    setTimeout(() => { setCurrent(i); setFade(true); }, 220);
  };

  const d = days[current];
  const ac = arcColors[d.arc] || "#8B6914";

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(160deg, #f7f1e8 0%, #efe6d5 50%, #e8ddc8 100%)",
      fontFamily: "'Cormorant Garamond', Georgia, serif",
      display: "flex",
      flexDirection: "column",
    }}>

      {/* Header */}
      <div style={{
        width: "100%",
        background: "#2C1F0E",
        padding: "28px 24px 22px",
        textAlign: "center",
        borderBottom: "3px solid #8B6914",
      }}>
        <div style={{
          fontFamily: "'Cinzel', serif",
          color: "#D4AA5F",
          fontSize: "10px",
          letterSpacing: "5px",
          textTransform: "uppercase",
          marginBottom: "6px",
        }}>January</div>
        <div style={{
          fontFamily: "'Cinzel', serif",
          color: "#F5ECD7",
          fontSize: "14px",
          letterSpacing: "2px",
          marginBottom: "8px",
        }}>The God Who Provides</div>
        <div style={{
          color: "#B89A60",
          fontSize: "12px",
          fontStyle: "italic",
          fontWeight: 300,
        }}>A household blessing for every evening meal</div>
      </div>

      {/* Day Selector */}
      <div style={{
        width: "100%",
        overflowX: "auto",
        background: "#3D2B10",
        padding: "10px 16px",
        display: "flex",
        gap: "6px",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}>
        {days.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              flexShrink: 0,
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              border: i === current ? "2px solid #D4AA5F" : "2px solid transparent",
              background: i === current ? "#8B6914" : "rgba(255,255,255,0.08)",
              color: i === current ? "#FFF8E8" : "#B89A60",
              fontFamily: "'Cinzel', serif",
              fontSize: "11px",
              cursor: "pointer",
              transition: "all 0.18s ease",
            }}
          >{i + 1}</button>
        ))}
      </div>

      {/* Main Content */}
      <div style={{
        maxWidth: "680px",
        width: "100%",
        margin: "0 auto",
        padding: "36px 24px 60px",
        opacity: fade ? 1 : 0,
        transform: fade ? "translateY(0)" : "translateY(8px)",
        transition: "opacity 0.22s ease, transform 0.22s ease",
      }}>

        {/* Arc label */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
          <div style={{ width: "24px", height: "1.5px", background: ac, opacity: 0.7 }} />
          <div style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "9px",
            letterSpacing: "3px",
            color: ac,
            textTransform: "uppercase",
            opacity: 0.85,
          }}>{d.arc}</div>
        </div>

        {/* Day + Theme */}
        <div style={{ marginBottom: "28px" }}>
          <div style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "10px",
            letterSpacing: "3px",
            color: "#8B6914",
            marginBottom: "6px",
          }}>Day {d.day}</div>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(26px, 6vw, 40px)",
            fontWeight: 500,
            color: "#1A0F04",
            margin: 0,
            lineHeight: 1.12,
          }}>{d.theme}</h1>
        </div>

        {/* Rule */}
        <div style={{ height: "1px", background: "#D4AA5F88", marginBottom: "20px" }} />

        {/* Reference */}
        <div style={{
          fontFamily: "'Cinzel', serif",
          fontSize: "9px",
          letterSpacing: "2.5px",
          color: "#8B6914",
          textTransform: "uppercase",
          marginBottom: "14px",
        }}>{d.reference}</div>

        {/* Passage */}
        <div style={{
          borderLeft: "3px solid #8B6914",
          paddingLeft: "18px",
          paddingTop: "12px",
          paddingBottom: "12px",
          paddingRight: "12px",
          marginBottom: "26px",
          background: "rgba(44,31,14,0.04)",
          borderRadius: "0 2px 2px 0",
        }}>
          <p style={{
            fontStyle: "italic",
            fontSize: "clamp(15px, 3.4vw, 18px)",
            lineHeight: 1.8,
            color: "#2C1F0E",
            margin: 0,
            fontWeight: 300,
          }}>"{d.passage}"</p>
        </div>

        {/* Framing */}
        <p style={{
          fontSize: "clamp(15px, 3vw, 17px)",
          lineHeight: 1.9,
          color: "#4A3520",
          margin: "0 0 34px 0",
          fontWeight: 400,
        }}>{d.framing}</p>

        {/* Divider */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "26px" }}>
          <div style={{ flex: 1, height: "1px", background: "#D4AA5F44" }} />
          <div style={{ color: "#8B6914", fontSize: "16px", opacity: 0.7 }}>✦</div>
          <div style={{ flex: 1, height: "1px", background: "#D4AA5F44" }} />
        </div>

        {/* Prayer */}
        <div style={{
          background: "#2C1F0E",
          borderRadius: "3px",
          padding: "24px 26px 28px",
          borderTop: "2px solid #8B6914",
        }}>
          <div style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "9px",
            letterSpacing: "3px",
            color: "#D4AA5F",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}>Prayer</div>

          {/* Opening line — Lord, */}
          <p style={{
            fontStyle: "italic",
            fontSize: "clamp(15px, 3.2vw, 18px)",
            lineHeight: 1.7,
            color: "#F5ECD7",
            margin: "0 0 10px 0",
            fontWeight: 300,
          }}>{d.prayerOpen}</p>

          {/* Body lines */}
          {d.prayerBody.map((line, i) => (
            <p key={i} style={{
              fontStyle: "italic",
              fontSize: "clamp(15px, 3.2vw, 18px)",
              lineHeight: 1.7,
              color: "#F5ECD7",
              margin: "0",
              fontWeight: 300,
            }}>{line}</p>
          ))}

          {/* Closing line — thin rule then In Jesus' Holy Name */}
          <div style={{ height: "1px", background: "#8B691455", margin: "16px 0 14px 0" }} />
          <p style={{
            fontStyle: "italic",
            fontSize: "clamp(15px, 3.2vw, 18px)",
            lineHeight: 1.7,
            color: "#D4AA5F",
            margin: 0,
            fontWeight: 500,
            letterSpacing: "0.5px",
          }}>{d.prayerClose}</p>
        </div>

        {/* Navigation */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "40px",
        }}>
          <button
            onClick={() => current > 0 && goTo(current - 1)}
            disabled={current === 0}
            style={{
              background: "transparent",
              border: "1px solid #8B691455",
              color: current === 0 ? "#8B691430" : "#8B6914",
              fontFamily: "'Cinzel', serif",
              fontSize: "9px",
              letterSpacing: "2px",
              padding: "10px 18px",
              cursor: current === 0 ? "default" : "pointer",
              borderRadius: "2px",
              textTransform: "uppercase",
            }}
          >← Day {current > 0 ? current : "1"}</button>

          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "13px",
            color: "#8B6914",
            fontStyle: "italic",
          }}>{current + 1} of 31</div>

          <button
            onClick={() => current < 30 && goTo(current + 1)}
            disabled={current === 30}
            style={{
              background: current < 30 ? "#8B6914" : "transparent",
              border: "1px solid #8B6914",
              color: current < 30 ? "#FFF8E8" : "#8B691430",
              fontFamily: "'Cinzel', serif",
              fontSize: "9px",
              letterSpacing: "2px",
              padding: "10px 18px",
              cursor: current === 30 ? "default" : "pointer",
              borderRadius: "2px",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >{current < 30 ? `Day ${current + 2} →` : "Fin"}</button>
        </div>

      </div>
    </div>
  );
}
