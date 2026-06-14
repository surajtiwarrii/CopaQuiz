const QUESTIONS_THEORY_2 = [
  {type:"mcq",diff:"easy",
   en:{q:"What is the main function of CPU?",opts:["Processing data","Printing documents","Displaying output","Scanning images"],ans:0,exp:"CPU executes instructions and processes data."},
   hi:{q:"CPU का मुख्य कार्य क्या है?",opts:["डेटा प्रोसेस करना","दस्तावेज़ प्रिंट करना","आउटपुट दिखाना","चित्र स्कैन करना"],ans:0,exp:"CPU निर्देशों को निष्पादित करता है और डेटा प्रोसेस करता है।"}
  },
  {type:"mcq",diff:"easy",
   en:{q:"Which device is used to type letters and numbers?",opts:["Keyboard","Mouse","Monitor","Speaker"],ans:0,exp:"Keyboard is an input device used for typing."},
   hi:{q:"अक्षर और संख्या टाइप करने के लिए कौन-सा उपकरण उपयोग होता है?",opts:["कीबोर्ड","माउस","मॉनिटर","स्पीकर"],ans:0,exp:"कीबोर्ड टाइपिंग के लिए उपयोग किया जाता है।"}
  },
  {type:"mcq",diff:"easy",
   en:{q:"Which device shows information on screen?",opts:["Monitor","Scanner","Printer","SMPS"],ans:0,exp:"Monitor displays visual output."},
   hi:{q:"स्क्रीन पर जानकारी दिखाने वाला उपकरण कौन-सा है?",opts:["मॉनिटर","स्कैनर","प्रिंटर","SMPS"],ans:0,exp:"मॉनिटर दृश्य आउटपुट प्रदर्शित करता है।"}
  },
  {type:"mcq",diff:"easy",
   en:{q:"Which device is commonly used to point and click?",opts:["Mouse","Keyboard","Speaker","Webcam"],ans:0,exp:"Mouse controls the cursor on the screen."},
   hi:{q:"पॉइंट और क्लिक करने के लिए कौन-सा उपकरण उपयोग होता है?",opts:["माउस","कीबोर्ड","स्पीकर","वेबकैम"],ans:0,exp:"माउस स्क्रीन पर कर्सर को नियंत्रित करता है।"}
  },
  {type:"tf",diff:"easy",
   en:{q:"RAM loses data when power is turned off.",opts:["True","False"],ans:0,exp:"RAM is volatile memory."},
   hi:{q:"बिजली बंद होने पर RAM का डेटा मिट जाता है।",opts:["सही","गलत"],ans:0,exp:"RAM वोलाटाइल मेमोरी होती है।"}
  },
  {type:"mcq",diff:"easy",
   en:{q:"Which storage device is installed inside a computer?",opts:["Hard Disk","Projector","Speaker","Microphone"],ans:0,exp:"Hard disk stores files and operating system."},
   hi:{q:"कंप्यूटर के अंदर स्थापित स्टोरेज डिवाइस कौन-सा है?",opts:["हार्ड डिस्क","प्रोजेक्टर","स्पीकर","माइक्रोफोन"],ans:0,exp:"हार्ड डिस्क फाइलें और ऑपरेटिंग सिस्टम संग्रहित करती है।"}
  },
  {type:"mcq",diff:"easy",
   en:{q:"Which device produces a paper copy?",opts:["Printer","Scanner","Monitor","Mouse"],ans:0,exp:"Printer creates hard copies of documents."},
   hi:{q:"कागज़ पर कॉपी बनाने वाला उपकरण कौन-सा है?",opts:["प्रिंटर","स्कैनर","मॉनिटर","माउस"],ans:0,exp:"प्रिंटर दस्तावेज़ों की हार्ड कॉपी बनाता है।"}
  },
  {type:"mcq",diff:"easy",
   en:{q:"Which device captures images from paper?",opts:["Scanner","Printer","Speaker","CPU"],ans:0,exp:"Scanner converts physical documents into digital form."},
   hi:{q:"कागज़ से चित्र कैप्चर करने वाला उपकरण कौन-सा है?",opts:["स्कैनर","प्रिंटर","स्पीकर","CPU"],ans:0,exp:"स्कैनर दस्तावेज़ों को डिजिटल रूप में बदलता है।"}
  },
  {type:"tf",diff:"easy",
   en:{q:"CPU is located on the motherboard.",opts:["True","False"],ans:0,exp:"CPU is mounted on the motherboard socket."},
   hi:{q:"CPU मदरबोर्ड पर लगाया जाता है।",opts:["सही","गलत"],ans:0,exp:"CPU मदरबोर्ड के सॉकेट में स्थापित होता है।"}
  },
  {type:"mcq",diff:"easy",
   en:{q:"Which component is known as the backbone of a computer?",opts:["Motherboard","RAM","Mouse","Monitor"],ans:0,exp:"Motherboard connects all major hardware components."},
   hi:{q:"कंप्यूटर की रीढ़ किसे कहा जाता है?",opts:["मदरबोर्ड","RAM","माउस","मॉनिटर"],ans:0,exp:"मदरबोर्ड सभी प्रमुख हार्डवेयर को जोड़ता है।"}
  },
  {type:"mcq",diff:"easy",
   en:{q:"Which device outputs sound?",opts:["Speaker","Scanner","Printer","Keyboard"],ans:0,exp:"Speaker converts signals into sound."},
   hi:{q:"ध्वनि आउटपुट देने वाला उपकरण कौन-सा है?",opts:["स्पीकर","स्कैनर","प्रिंटर","कीबोर्ड"],ans:0,exp:"स्पीकर ध्वनि आउटपुट देता है।"}
  },
  {type:"mcq",diff:"easy",
   en:{q:"Which storage device has no moving parts?",opts:["SSD","HDD","DVD","CD"],ans:0,exp:"SSD uses flash memory technology."},
   hi:{q:"कौन-से स्टोरेज डिवाइस में कोई चलने वाला भाग नहीं होता?",opts:["SSD","HDD","DVD","CD"],ans:0,exp:"SSD फ्लैश मेमोरी तकनीक का उपयोग करता है।"}
  },
  {type:"mcq",diff:"easy",
   en:{q:"Which component holds the CPU, RAM and expansion cards?",opts:["Motherboard","Monitor","Printer","Speaker"],ans:0,exp:"Motherboard is the main circuit board connecting all components."},
   hi:{q:"CPU, RAM और एक्सपेंशन कार्ड को कौन-सा घटक धारण करता है?",opts:["मदरबोर्ड","मॉनिटर","प्रिंटर","स्पीकर"],ans:0,exp:"मदरबोर्ड सभी घटकों को जोड़ने वाला मुख्य सर्किट बोर्ड है।"}
  },
  {type:"mcq",diff:"easy",
   en:{q:"Which device is used to record voice into a computer?",opts:["Microphone","Speaker","Monitor","Printer"],ans:0,exp:"Microphone converts sound into digital signals."},
   hi:{q:"कंप्यूटर में आवाज रिकॉर्ड करने के लिए कौन-सा उपकरण उपयोग होता है?",opts:["माइक्रोफोन","स्पीकर","मॉनिटर","प्रिंटर"],ans:0,exp:"माइक्रोफोन ध्वनि को डिजिटल सिग्नल में बदलता है।"}
  },
  {type:"tf",diff:"easy",
   en:{q:"A monitor is an output device.",opts:["True","False"],ans:0,exp:"Monitor displays information to the user."},
   hi:{q:"मॉनिटर एक आउटपुट डिवाइस है।",opts:["सही","गलत"],ans:0,exp:"मॉनिटर उपयोगकर्ता को जानकारी दिखाता है।"}
  },
  {type:"mcq",diff:"easy",
   en:{q:"Which storage device is commonly called a pen drive?",opts:["USB Flash Drive","RAM","ROM","Cache"],ans:0,exp:"USB flash drives are portable storage devices."},
   hi:{q:"पेन ड्राइव को सामान्यतः किस नाम से जाना जाता है?",opts:["USB Flash Drive","RAM","ROM","कैश"],ans:0,exp:"USB फ्लैश ड्राइव एक पोर्टेबल स्टोरेज डिवाइस है।"}
  },
  {type:"mcq",diff:"easy",
   en:{q:"Which device projects the computer display onto a large screen?",opts:["Projector","Scanner","Printer","Mouse"],ans:0,exp:"Projectors display images on large surfaces."},
   hi:{q:"कंप्यूटर की स्क्रीन को बड़ी स्क्रीन पर दिखाने वाला उपकरण कौन-सा है?",opts:["प्रोजेक्टर","स्कैनर","प्रिंटर","माउस"],ans:0,exp:"प्रोजेक्टर बड़ी सतह पर चित्र प्रदर्शित करता है।"}
  },
  {type:"tf",diff:"easy",
   en:{q:"RAM is installed on the motherboard.",opts:["True","False"],ans:0,exp:"RAM modules fit into memory slots on the motherboard."},
   hi:{q:"RAM मदरबोर्ड पर लगाई जाती है।",opts:["सही","गलत"],ans:0,exp:"RAM मॉड्यूल मदरबोर्ड के स्लॉट में लगाए जाते हैं।"}
  },
  {type:"mcq",diff:"easy",
   en:{q:"Which component stores files even after power is switched off?",opts:["SSD","RAM","Cache","Register"],ans:0,exp:"SSD is non-volatile storage."},
   hi:{q:"बिजली बंद होने के बाद भी फाइलों को कौन-सा घटक सुरक्षित रखता है?",opts:["SSD","RAM","कैश","रजिस्टर"],ans:0,exp:"SSD नॉन-वोलाटाइल स्टोरेज है।"}
  },
  {type:"mcq",diff:"easy",
   en:{q:"Which key is commonly used to delete selected files?",opts:["Delete","Shift","Ctrl","Alt"],ans:0,exp:"Delete key removes selected items."},
   hi:{q:"चयनित फाइल हटाने के लिए सामान्यतः कौन-सी कुंजी उपयोग होती है?",opts:["Delete","Shift","Ctrl","Alt"],ans:0,exp:"Delete कुंजी चयनित आइटम हटाती है।"}
  },
  {type:"tf",diff:"easy",
   en:{q:"Speakers are output devices.",opts:["True","False"],ans:0,exp:"Speakers produce audio output."},
   hi:{q:"स्पीकर आउटपुट डिवाइस हैं।",opts:["सही","गलत"],ans:0,exp:"स्पीकर ध्वनि आउटपुट प्रदान करते हैं।"}
  },
  {type:"mcq",diff:"easy",
   en:{q:"Which device is mainly used for gaming control?",opts:["Joystick","Scanner","Printer","SMPS"],ans:0,exp:"Joystick is commonly used in games and simulations."},
   hi:{q:"गेम नियंत्रण के लिए मुख्यतः कौन-सा उपकरण उपयोग होता है?",opts:["Joystick","Scanner","Printer","SMPS"],ans:0,exp:"जॉयस्टिक गेम और सिमुलेशन में उपयोग होता है।"}
  },
  {type:"mcq",diff:"easy",
   en:{q:"Which component provides electrical power to internal hardware?",opts:["SMPS","CPU","RAM","ROM"],ans:0,exp:"SMPS distributes power to all components."},
   hi:{q:"आंतरिक हार्डवेयर को बिजली कौन-सा घटक प्रदान करता है?",opts:["SMPS","CPU","RAM","ROM"],ans:0,exp:"SMPS सभी घटकों को बिजली देता है।"}
  },
  {type:"tf",diff:"easy",
   en:{q:"A scanner is used to input images into a computer.",opts:["True","False"],ans:0,exp:"Scanners convert images into digital form."},
   hi:{q:"स्कैनर का उपयोग चित्रों को कंप्यूटर में इनपुट करने के लिए किया जाता है।",opts:["सही","गलत"],ans:0,exp:"स्कैनर चित्रों को डिजिटल रूप में बदलता है।"}
  },
  {type:"mcq",diff:"easy",
   en:{q:"Which device is used to connect a computer to the internet through a network?",opts:["NIC","RAM","ROM","CPU"],ans:0,exp:"NIC enables communication between a computer and network."},
   hi:{q:"कंप्यूटर को नेटवर्क के माध्यम से इंटरनेट से जोड़ने के लिए कौन-सा उपकरण उपयोग होता है?",opts:["NIC","RAM","ROM","CPU"],ans:0,exp:"NIC कंप्यूटर को नेटवर्क से जोड़ता है।"}
  },
  {type:"mcq",diff:"easy",
   en:{q:"Which component stores data permanently?",opts:["SSD","RAM","Cache","Register"],ans:0,exp:"SSD stores data even after power is turned off."},
   hi:{q:"डेटा को स्थायी रूप से कौन-सा घटक संग्रहित करता है?",opts:["SSD","RAM","कैश","रजिस्टर"],ans:0,exp:"SSD बिजली बंद होने के बाद भी डेटा सुरक्षित रखता है।"}
  },
  {type:"tf",diff:"easy",
   en:{q:"A webcam is an input device.",opts:["True","False"],ans:0,exp:"A webcam captures images and videos."},
   hi:{q:"वेबकैम एक इनपुट डिवाइस है।",opts:["सही","गलत"],ans:0,exp:"वेबकैम चित्र और वीडियो कैप्चर करता है।"}
  },
  {type:"mcq",diff:"easy",
   en:{q:"Which hardware component is responsible for displaying graphics?",opts:["Monitor","Keyboard","Mouse","SMPS"],ans:0,exp:"Monitor displays visual information generated by the computer."},
   hi:{q:"ग्राफिक्स प्रदर्शित करने के लिए कौन-सा हार्डवेयर जिम्मेदार है?",opts:["मॉनिटर","कीबोर्ड","माउस","SMPS"],ans:0,exp:"मॉनिटर कंप्यूटर द्वारा उत्पन्न दृश्य जानकारी दिखाता है।"}
  },
  {type:"mcq",diff:"easy",
   en:{q:"Which device is used to capture printed text into a computer?",opts:["Scanner","Printer","Speaker","Plotter"],ans:0,exp:"Scanner converts printed text into digital form."},
   hi:{q:"मुद्रित पाठ को कंप्यूटर में लाने के लिए कौन-सा उपकरण उपयोग होता है?",opts:["स्कैनर","प्रिंटर","स्पीकर","प्लॉटर"],ans:0,exp:"स्कैनर मुद्रित पाठ को डिजिटल रूप में बदलता है।"}
  },
  {type:"tf",diff:"easy",
   en:{q:"ROM retains data even when power is switched off.",opts:["True","False"],ans:0,exp:"ROM is non-volatile memory."},
   hi:{q:"बिजली बंद होने पर भी ROM डेटा सुरक्षित रखती है।",opts:["सही","गलत"],ans:0,exp:"ROM नॉन-वोलाटाइल मेमोरी होती है।"}
  },
  {type:"mcq",diff:"easy",
   en:{q:"Which component is known as temporary memory?",opts:["RAM","SSD","DVD","ROM"],ans:0,exp:"RAM stores data temporarily during processing."},
   hi:{q:"अस्थायी मेमोरी किसे कहा जाता है?",opts:["RAM","SSD","DVD","ROM"],ans:0,exp:"RAM प्रोसेसिंग के दौरान अस्थायी रूप से डेटा रखती है।"}
  },
  {type:"mcq",diff:"easy",
   en:{q:"Which device is mainly used for audio input?",opts:["Microphone","Speaker","Monitor","Projector"],ans:0,exp:"Microphone records sound into the computer."},
   hi:{q:"ऑडियो इनपुट के लिए मुख्यतः कौन-सा उपकरण उपयोग होता है?",opts:["माइक्रोफोन","स्पीकर","मॉनिटर","प्रोजेक्टर"],ans:0,exp:"माइक्रोफोन ध्वनि को कंप्यूटर में इनपुट करता है।"}
  },
  {type:"tf",diff:"easy",
   en:{q:"USB devices can be connected and removed without restarting the computer.",opts:["True","False"],ans:0,exp:"USB supports plug-and-play functionality."},
   hi:{q:"USB उपकरणों को कंप्यूटर रीस्टार्ट किए बिना जोड़ा और हटाया जा सकता है।",opts:["सही","गलत"],ans:0,exp:"USB प्लग-एंड-प्ले सुविधा प्रदान करता है।"}
  },
  {type:"mcq",diff:"easy",
   en:{q:"Which device is used to produce large maps and engineering drawings?",opts:["Plotter","Speaker","Scanner","Keyboard"],ans:0,exp:"Plotters are used for large technical drawings."},
   hi:{q:"बड़े नक्शे और इंजीनियरिंग ड्रॉइंग बनाने के लिए कौन-सा उपकरण उपयोग होता है?",opts:["प्लॉटर","स्पीकर","स्कैनर","कीबोर्ड"],ans:0,exp:"प्लॉटर बड़े तकनीकी चित्र बनाने के लिए उपयोग होता है।"}
  },
  {type:"mcq",diff:"medium",
   en:{q:"What is the full form of CPU?",opts:["Central Processing Unit","Central Program Unit","Computer Processing Unit","Central Power Unit"],ans:0,exp:"CPU is the primary processing unit of a computer."},
   hi:{q:"CPU का पूरा नाम क्या है?",opts:["Central Processing Unit","Central Program Unit","Computer Processing Unit","Central Power Unit"],ans:0,exp:"CPU कंप्यूटर की मुख्य प्रोसेसिंग इकाई है।"}
  },
  {type:"mcq",diff:"medium",
   en:{q:"Which memory stores startup instructions?",opts:["ROM","RAM","Cache","SSD"],ans:0,exp:"ROM stores firmware and startup instructions."},
   hi:{q:"स्टार्टअप निर्देश किस मेमोरी में संग्रहित होते हैं?",opts:["ROM","RAM","कैश","SSD"],ans:0,exp:"ROM में फर्मवेयर और स्टार्टअप निर्देश होते हैं।"}
  },
  {type:"mcq",diff:"medium",
   en:{q:"Which port is commonly used for connecting pen drives?",opts:["USB","VGA","RJ45","PS/2"],ans:0,exp:"USB is widely used for removable storage devices."},
   hi:{q:"पेन ड्राइव जोड़ने के लिए सामान्यतः कौन-सा पोर्ट उपयोग होता है?",opts:["USB","VGA","RJ45","PS/2"],ans:0,exp:"USB पोर्ट स्टोरेज डिवाइस जोड़ने के लिए उपयोग होता है।"}
  },
  {type:"mcq",diff:"medium",
   en:{q:"Which port is mainly used for connecting a monitor to a computer?",opts:["HDMI","USB","PS/2","RJ45"],ans:0,exp:"HDMI transmits digital video and audio signals."},
   hi:{q:"मॉनिटर को कंप्यूटर से जोड़ने के लिए मुख्यतः कौन-सा पोर्ट उपयोग होता है?",opts:["HDMI","USB","PS/2","RJ45"],ans:0,exp:"HDMI डिजिटल वीडियो और ऑडियो सिग्नल भेजता है।"}
  },
  {type:"mcq",diff:"medium",
   en:{q:"What is the full form of SSD?",opts:["Solid State Drive","System Storage Drive","Secure State Drive","Solid Storage Disk"],ans:0,exp:"SSD uses flash memory and provides high speed."},
   hi:{q:"SSD का पूरा नाम क्या है?",opts:["Solid State Drive","System Storage Drive","Secure State Drive","Solid Storage Disk"],ans:0,exp:"SSD फ्लैश मेमोरी आधारित तेज़ स्टोरेज डिवाइस है।"}
  },
  {type:"tf",diff:"medium",
   en:{q:"Motherboard contains slots for RAM installation.",opts:["True","False"],ans:0,exp:"RAM modules are installed into motherboard memory slots."},
   hi:{q:"मदरबोर्ड में RAM लगाने के लिए स्लॉट होते हैं।",opts:["सही","गलत"],ans:0,exp:"RAM मॉड्यूल मदरबोर्ड के मेमोरी स्लॉट में लगाए जाते हैं।"}
  },
  {type:"mcq",diff:"medium",
   en:{q:"Which device is used to capture video input?",opts:["Webcam","Speaker","Monitor","Printer"],ans:0,exp:"Webcam records video and sends it to the computer."},
   hi:{q:"वीडियो इनपुट प्राप्त करने के लिए कौन-सा उपकरण उपयोग होता है?",opts:["वेबकैम","स्पीकर","मॉनिटर","प्रिंटर"],ans:0,exp:"वेबकैम वीडियो रिकॉर्ड करके कंप्यूटर को भेजता है।"}
  },
  {type:"mcq",diff:"medium",
   en:{q:"What is the function of SMPS?",opts:["Convert AC to DC","Increase RAM","Display Output","Store Data"],ans:0,exp:"SMPS converts AC power into regulated DC power."},
   hi:{q:"SMPS का कार्य क्या है?",opts:["AC को DC में बदलना","RAM बढ़ाना","आउटपुट दिखाना","डेटा संग्रहित करना"],ans:0,exp:"SMPS AC बिजली को नियंत्रित DC में बदलता है।"}
  },
  {type:"mcq",diff:"medium",
   en:{q:"Which memory is known as primary memory?",opts:["RAM","HDD","DVD","Pen Drive"],ans:0,exp:"RAM is directly accessed by the CPU."},
   hi:{q:"कौन-सी मेमोरी प्राथमिक मेमोरी कहलाती है?",opts:["RAM","HDD","DVD","पेन ड्राइव"],ans:0,exp:"RAM को CPU सीधे एक्सेस करता है।"}
  },
  {type:"tf",diff:"medium",
   en:{q:"USB stands for Universal Serial Bus.",opts:["True","False"],ans:0,exp:"USB is a common interface for connecting peripherals."},
   hi:{q:"USB का पूरा नाम Universal Serial Bus है।",opts:["सही","गलत"],ans:0,exp:"USB परिधीय उपकरण जोड़ने का सामान्य इंटरफेस है।"}
  },
  {type:"mcq",diff:"medium",
   en:{q:"Which hardware stores BIOS firmware?",opts:["ROM","RAM","SSD","Cache"],ans:0,exp:"BIOS firmware is stored in ROM memory."},
   hi:{q:"BIOS फर्मवेयर किस हार्डवेयर में संग्रहित होता है?",opts:["ROM","RAM","SSD","कैश"],ans:0,exp:"BIOS फर्मवेयर ROM मेमोरी में संग्रहित होता है।"}
  },
  {type:"mcq",diff:"medium",
   en:{q:"Which connector is used for network cable connection?",opts:["RJ45","HDMI","USB","VGA"],ans:0,exp:"RJ45 is used with Ethernet network cables."},
   hi:{q:"नेटवर्क केबल जोड़ने के लिए कौन-सा कनेक्टर उपयोग होता है?",opts:["RJ45","HDMI","USB","VGA"],ans:0,exp:"RJ45 Ethernet नेटवर्क केबल के लिए उपयोग होता है।"}
  },
  {type:"mcq",diff:"medium",
   en:{q:"Which port is commonly used to connect a computer to a wired network?",opts:["RJ45","HDMI","VGA","PS/2"],ans:0,exp:"RJ45 connector is used with Ethernet cables for networking."},
   hi:{q:"कंप्यूटर को वायर्ड नेटवर्क से जोड़ने के लिए कौन-सा पोर्ट उपयोग होता है?",opts:["RJ45","HDMI","VGA","PS/2"],ans:0,exp:"RJ45 कनेक्टर Ethernet नेटवर्क के लिए उपयोग होता है।"}
  },
  {type:"mcq",diff:"medium",
   en:{q:"Which device converts digital signals into printed output?",opts:["Printer","Monitor","Scanner","Speaker"],ans:0,exp:"Printer converts digital documents into hard copies."},
   hi:{q:"डिजिटल सिग्नल को प्रिंटेड आउटपुट में बदलने वाला उपकरण कौन-सा है?",opts:["Printer","Monitor","Scanner","Speaker"],ans:0,exp:"प्रिंटर डिजिटल दस्तावेज़ों को हार्ड कॉपी में बदलता है।"}
  },
  {type:"tf",diff:"medium",
   en:{q:"A webcam is an input device.",opts:["True","False"],ans:0,exp:"A webcam captures images and video as input."},
   hi:{q:"वेबकैम एक इनपुट डिवाइस है।",opts:["सही","गलत"],ans:0,exp:"वेबकैम चित्र और वीडियो इनपुट के रूप में लेता है।"}
  },
  {type:"mcq",diff:"medium",
   en:{q:"What is the purpose of a sound card?",opts:["Process audio","Store files","Control power","Connect monitor"],ans:0,exp:"Sound cards handle audio input and output."},
   hi:{q:"साउंड कार्ड का उद्देश्य क्या है?",opts:["ऑडियो प्रोसेस करना","फाइल संग्रहित करना","पावर नियंत्रित करना","मॉनिटर जोड़ना"],ans:0,exp:"साउंड कार्ड ऑडियो इनपुट और आउटपुट को संभालता है।"}
  },
  {type:"mcq",diff:"medium",
   en:{q:"Which storage device is portable and commonly connects via USB?",opts:["Pen Drive","RAM","Cache","ROM"],ans:0,exp:"Pen drives are portable flash storage devices."},
   hi:{q:"कौन-सा स्टोरेज डिवाइस पोर्टेबल होता है और USB से जुड़ता है?",opts:["पेन ड्राइव","RAM","कैश","ROM"],ans:0,exp:"पेन ड्राइव पोर्टेबल फ्लैश स्टोरेज डिवाइस है।"}
  },
  {type:"tf",diff:"medium",
   en:{q:"DVD is an optical storage device.",opts:["True","False"],ans:0,exp:"DVD stores data using laser technology."},
   hi:{q:"DVD एक ऑप्टिकल स्टोरेज डिवाइस है।",opts:["सही","गलत"],ans:0,exp:"DVD लेजर तकनीक द्वारा डेटा संग्रहित करती है।"}
  },
  {type:"mcq",diff:"medium",
   en:{q:"Which component temporarily stores data currently used by the CPU?",opts:["RAM","ROM","HDD","DVD"],ans:0,exp:"RAM holds active data and programs."},
   hi:{q:"CPU द्वारा वर्तमान में उपयोग किए जा रहे डेटा को अस्थायी रूप से कौन संग्रहित करता है?",opts:["RAM","ROM","HDD","DVD"],ans:0,exp:"RAM सक्रिय डेटा और प्रोग्राम रखती है।"}
  },
  {type:"mcq",diff:"medium",
   en:{q:"Which port was traditionally used for monitors before HDMI became common?",opts:["VGA","USB","RJ45","PS/2"],ans:0,exp:"VGA was widely used for analog video output."},
   hi:{q:"HDMI के लोकप्रिय होने से पहले मॉनिटर के लिए कौन-सा पोर्ट उपयोग होता था?",opts:["VGA","USB","RJ45","PS/2"],ans:0,exp:"VGA एनालॉग वीडियो आउटपुट के लिए उपयोग होता था।"}
  },
  {type:"mcq",diff:"medium",
   en:{q:"What does NIC stand for?",opts:["Network Interface Card","Network Input Card","New Internet Card","Node Interface Card"],ans:0,exp:"NIC allows a computer to connect to a network."},
   hi:{q:"NIC का पूरा नाम क्या है?",opts:["Network Interface Card","Network Input Card","New Internet Card","Node Interface Card"],ans:0,exp:"NIC कंप्यूटर को नेटवर्क से जोड़ता है।"}
  },
  {type:"mcq",diff:"medium",
   en:{q:"Which device combines printing, scanning and copying functions?",opts:["Multifunction Printer","Plotter","Speaker","Projector"],ans:0,exp:"Multifunction devices perform multiple tasks."},
   hi:{q:"प्रिंटिंग, स्कैनिंग और कॉपी करने का कार्य एक साथ करने वाला उपकरण कौन-सा है?",opts:["Multifunction Printer","Plotter","Speaker","Projector"],ans:0,exp:"मल्टीफंक्शन प्रिंटर कई कार्य करता है।"}
  },
  {type:"mcq",diff:"medium",
   en:{q:"Which memory is used to store frequently accessed instructions for faster processing?",opts:["Cache Memory","DVD","HDD","Pen Drive"],ans:0,exp:"Cache memory speeds up CPU operations."},
   hi:{q:"तेज़ प्रोसेसिंग के लिए अक्सर उपयोग होने वाले निर्देश किस मेमोरी में रखे जाते हैं?",opts:["कैश मेमोरी","DVD","HDD","पेन ड्राइव"],ans:0,exp:"कैश मेमोरी CPU की गति बढ़ाती है।"}
  },
  {type:"mcq",diff:"medium",
   en:{q:"Which interface is commonly used by modern SSDs for high-speed communication?",opts:["SATA","PS/2","VGA","Serial"],ans:0,exp:"SATA is widely used to connect storage devices."},
   hi:{q:"उच्च गति संचार के लिए आधुनिक SSD में सामान्यतः कौन-सा इंटरफेस उपयोग होता है?",opts:["SATA","PS/2","VGA","Serial"],ans:0,exp:"SATA स्टोरेज डिवाइस को जोड़ने के लिए व्यापक रूप से उपयोग होता है।"}
  },
  {type:"mcq",diff:"medium",
   en:{q:"Which port is commonly used for high-definition video output?",opts:["HDMI","RJ45","PS/2","Serial"],ans:0,exp:"HDMI carries digital video and audio signals."},
   hi:{q:"हाई-डेफिनिशन वीडियो आउटपुट के लिए कौन-सा पोर्ट उपयोग होता है?",opts:["HDMI","RJ45","PS/2","Serial"],ans:0,exp:"HDMI डिजिटल वीडियो और ऑडियो सिग्नल भेजता है।"}
  },
  {type:"mcq",diff:"medium",
   en:{q:"What is the function of a graphics card?",opts:["Process graphics","Store files","Control power","Manage network"],ans:0,exp:"Graphics cards render images and videos."},
   hi:{q:"ग्राफिक्स कार्ड का कार्य क्या है?",opts:["ग्राफिक्स प्रोसेस करना","फाइल संग्रहित करना","पावर नियंत्रित करना","नेटवर्क प्रबंधित करना"],ans:0,exp:"ग्राफिक्स कार्ड चित्र और वीडियो प्रोसेस करता है।"}
  },
  {type:"tf",diff:"medium",
   en:{q:"BIOS starts the hardware initialization process during booting.",opts:["True","False"],ans:0,exp:"BIOS checks and initializes hardware before OS loads."},
   hi:{q:"BIOS बूटिंग के दौरान हार्डवेयर प्रारंभ करता है।",opts:["सही","गलत"],ans:0,exp:"BIOS ऑपरेटिंग सिस्टम लोड होने से पहले हार्डवेयर जांचता है।"}
  },
  {type:"mcq",diff:"medium",
   en:{q:"Which type of memory is closest to the CPU?",opts:["Cache","HDD","DVD","Pen Drive"],ans:0,exp:"Cache memory provides very fast access to data."},
   hi:{q:"CPU के सबसे निकट कौन-सी मेमोरी होती है?",opts:["कैश","HDD","DVD","पेन ड्राइव"],ans:0,exp:"कैश मेमोरी बहुत तेज़ डेटा एक्सेस प्रदान करती है।"}
  },
  {type:"mcq",diff:"medium",
   en:{q:"Which connector is commonly used for Ethernet networking?",opts:["RJ45","HDMI","USB","VGA"],ans:0,exp:"RJ45 is used with Ethernet cables."},
   hi:{q:"Ethernet नेटवर्किंग के लिए सामान्यतः कौन-सा कनेक्टर उपयोग होता है?",opts:["RJ45","HDMI","USB","VGA"],ans:0,exp:"RJ45 Ethernet केबल के साथ उपयोग होता है।"}
  },
  {type:"mcq",diff:"medium",
   en:{q:"What is the primary purpose of UEFI?",opts:["Initialize hardware and start boot process","Store user files","Provide internet access","Print documents"],ans:0,exp:"UEFI is modern firmware that initializes hardware and starts the operating system."},
   hi:{q:"UEFI का मुख्य उद्देश्य क्या है?",opts:["हार्डवेयर प्रारंभ करना और बूट प्रक्रिया शुरू करना","उपयोगकर्ता फाइलें संग्रहित करना","इंटरनेट उपलब्ध कराना","दस्तावेज़ प्रिंट करना"],ans:0,exp:"UEFI आधुनिक फर्मवेयर है जो हार्डवेयर प्रारंभ करता है और ऑपरेटिंग सिस्टम शुरू करता है।"}
  },
  {type:"mcq",diff:"medium",
   en:{q:"Which component is responsible for converting AC power into DC power inside a computer?",opts:["SMPS","CPU","NIC","GPU"],ans:0,exp:"SMPS converts AC supply into regulated DC power."},
   hi:{q:"कंप्यूटर के अंदर AC बिजली को DC में बदलने वाला घटक कौन-सा है?",opts:["SMPS","CPU","NIC","GPU"],ans:0,exp:"SMPS AC सप्लाई को नियंत्रित DC बिजली में बदलता है।"}
  },
  {type:"tf",diff:"medium",
   en:{q:"NIC allows a computer to communicate over a network.",opts:["True","False"],ans:0,exp:"NIC provides network connectivity."},
   hi:{q:"NIC कंप्यूटर को नेटवर्क पर संचार करने की सुविधा देता है।",opts:["सही","गलत"],ans:0,exp:"NIC नेटवर्क कनेक्टिविटी प्रदान करता है।"}
  },
  {type:"mcq",diff:"medium",
   en:{q:"Which storage device generally offers the highest data access speed?",opts:["SSD","HDD","DVD","Blu-ray"],ans:0,exp:"SSD uses flash memory and provides faster access than HDD."},
   hi:{q:"कौन-सा स्टोरेज डिवाइस सामान्यतः सबसे तेज़ डेटा एक्सेस देता है?",opts:["SSD","HDD","DVD","Blu-ray"],ans:0,exp:"SSD फ्लैश मेमोरी का उपयोग करता है और HDD से तेज़ होता है।"}
  },
  {type:"mcq",diff:"medium",
   en:{q:"Which motherboard component stores BIOS/UEFI settings?",opts:["CMOS","RAM","Cache","Register"],ans:0,exp:"CMOS memory stores firmware configuration settings."},
   hi:{q:"BIOS/UEFI सेटिंग्स किस मदरबोर्ड घटक में संग्रहित होती हैं?",opts:["CMOS","RAM","कैश","रजिस्टर"],ans:0,exp:"CMOS मेमोरी फर्मवेयर कॉन्फ़िगरेशन सेटिंग्स संग्रहित करती है।"}
  },
  {type:"tf",diff:"medium",
   en:{q:"PCIe slots are used to install expansion cards.",opts:["True","False"],ans:0,exp:"Graphics cards and other expansion cards use PCIe slots."},
   hi:{q:"PCIe स्लॉट का उपयोग एक्सपेंशन कार्ड लगाने के लिए किया जाता है।",opts:["सही","गलत"],ans:0,exp:"ग्राफिक्स कार्ड आदि PCIe स्लॉट में लगाए जाते हैं।"}
  },
  {type:"mcq",diff:"medium",
   en:{q:"Which device is used to provide backup power during electricity failure?",opts:["UPS","SMPS","GPU","NIC"],ans:0,exp:"UPS supplies temporary power during outages."},
   hi:{q:"बिजली जाने पर बैकअप पावर देने के लिए कौन-सा उपकरण उपयोग होता है?",opts:["UPS","SMPS","GPU","NIC"],ans:0,exp:"UPS बिजली कटने पर अस्थायी पावर प्रदान करता है।"}
  },
  {type:"mcq",diff:"medium",
   en:{q:"Which type of storage is considered secondary storage?",opts:["HDD","RAM","Cache","Register"],ans:0,exp:"HDD is used for long-term data storage."},
   hi:{q:"कौन-सा स्टोरेज सेकेंडरी स्टोरेज माना जाता है?",opts:["HDD","RAM","कैश","रजिस्टर"],ans:0,exp:"HDD दीर्घकालिक डेटा संग्रहण के लिए उपयोग होता है।"}
  },
  {type:"mcq",diff:"medium",
   en:{q:"Which device digitizes handwritten signatures and drawings?",opts:["Graphics Tablet","Speaker","Projector","SMPS"],ans:0,exp:"Graphics tablets capture pen-based input."},
   hi:{q:"हस्तलिखित हस्ताक्षर और ड्रॉइंग को डिजिटल रूप में लेने वाला उपकरण कौन-सा है?",opts:["Graphics Tablet","Speaker","Projector","SMPS"],ans:0,exp:"ग्राफिक्स टैबलेट पेन आधारित इनपुट को डिजिटल रूप में लेता है।"}
  },
  {type:"mcq",diff:"hard",
   en:{q:"Which memory is fastest between CPU and RAM?",opts:["Cache Memory","ROM","SSD","HDD"],ans:0,exp:"Cache memory provides very high-speed data access to CPU."},
   hi:{q:"CPU और RAM के बीच सबसे तेज़ मेमोरी कौन-सी होती है?",opts:["कैश मेमोरी","ROM","SSD","HDD"],ans:0,exp:"कैश मेमोरी CPU को तेज़ डेटा उपलब्ध कराती है।"}
  },
  {type:"mcq",diff:"hard",
   en:{q:"Which expansion card provides network connectivity?",opts:["NIC","GPU","Sound Card","Capture Card"],ans:0,exp:"NIC enables communication over computer networks."},
   hi:{q:"नेटवर्क कनेक्टिविटी प्रदान करने वाला एक्सपेंशन कार्ड कौन-सा है?",opts:["NIC","GPU","साउंड कार्ड","कैप्चर कार्ड"],ans:0,exp:"NIC कंप्यूटर को नेटवर्क से जोड़ता है।"}
  },
  {type:"mcq",diff:"hard",
   en:{q:"What is UEFI?",opts:["Modern replacement of BIOS","Storage Device","Network Protocol","Input Device"],ans:0,exp:"UEFI is an advanced firmware interface used in modern systems."},
   hi:{q:"UEFI क्या है?",opts:["BIOS का आधुनिक विकल्प","स्टोरेज डिवाइस","नेटवर्क प्रोटोकॉल","इनपुट डिवाइस"],ans:0,exp:"UEFI आधुनिक कंप्यूटरों में उपयोग होने वाला फर्मवेयर इंटरफेस है।"}
  },
  {type:"tf",diff:"hard",
   en:{q:"GPU is mainly responsible for graphics processing.",opts:["True","False"],ans:0,exp:"GPU handles rendering of images, videos and graphics."},
   hi:{q:"GPU मुख्य रूप से ग्राफिक्स प्रोसेसिंग के लिए जिम्मेदार होता है।",opts:["सही","गलत"],ans:0,exp:"GPU चित्र, वीडियो और ग्राफिक्स को प्रोसेस करता है।"}
  },
  {type:"mcq",diff:"hard",
   en:{q:"Which bus transfers data between computer components?",opts:["Data Bus","Power Bus","Control Switch","Drive Port"],ans:0,exp:"Data bus carries information between CPU, memory and devices."},
   hi:{q:"कंप्यूटर के विभिन्न घटकों के बीच डेटा स्थानांतरित करने वाली बस कौन-सी है?",opts:["डेटा बस","पावर बस","कंट्रोल स्विच","ड्राइव पोर्ट"],ans:0,exp:"डेटा बस CPU, मेमोरी और अन्य उपकरणों के बीच डेटा भेजती है।"}
  },
  {type:"mcq",diff:"hard",
   en:{q:"Which component is responsible for booting the computer before the OS loads?",opts:["BIOS/UEFI","RAM","Speaker","Scanner"],ans:0,exp:"BIOS/UEFI initializes hardware and starts the boot process."},
   hi:{q:"ऑपरेटिंग सिस्टम लोड होने से पहले कंप्यूटर को बूट करने के लिए कौन-सा घटक जिम्मेदार होता है?",opts:["BIOS/UEFI","RAM","स्पीकर","स्कैनर"],ans:0,exp:"BIOS/UEFI हार्डवेयर को प्रारंभ करके बूट प्रक्रिया शुरू करता है।"}
  },
  {type:"mcq",diff:"hard",
   en:{q:"Which type of memory is directly integrated into the CPU for very fast access?",opts:["Cache Memory","Hard Disk","DVD","Pen Drive"],ans:0,exp:"Cache memory provides extremely fast access to frequently used data."},
   hi:{q:"बहुत तेज़ एक्सेस के लिए CPU में सीधे एकीकृत कौन-सी मेमोरी होती है?",opts:["कैश मेमोरी","हार्ड डिस्क","DVD","पेन ड्राइव"],ans:0,exp:"कैश मेमोरी बार-बार उपयोग होने वाले डेटा तक तेज़ पहुंच देती है।"}
  },
  {type:"mcq",diff:"hard",
   en:{q:"Which motherboard slot is commonly used for modern graphics cards?",opts:["PCIe","AGP","ISA","DIMM"],ans:0,exp:"PCI Express is the standard interface for modern GPUs."},
   hi:{q:"आधुनिक ग्राफिक्स कार्ड के लिए मदरबोर्ड में कौन-सा स्लॉट उपयोग होता है?",opts:["PCIe","AGP","ISA","DIMM"],ans:0,exp:"PCI Express आधुनिक GPU के लिए मानक इंटरफेस है।"}
  },
  {type:"tf",diff:"hard",
   en:{q:"Firmware is software permanently stored in ROM or flash memory.",opts:["True","False"],ans:0,exp:"Firmware provides low-level control for hardware devices."},
   hi:{q:"फर्मवेयर ROM या फ्लैश मेमोरी में स्थायी रूप से संग्रहित सॉफ्टवेयर होता है।",opts:["सही","गलत"],ans:0,exp:"फर्मवेयर हार्डवेयर के निम्न-स्तरीय नियंत्रण के लिए उपयोग होता है।"}
  },
  {type:"mcq",diff:"hard",
   en:{q:"Which bus carries memory addresses from CPU to memory?",opts:["Address Bus","Data Bus","Control Bus","Power Bus"],ans:0,exp:"Address bus transfers memory location information."},
   hi:{q:"CPU से मेमोरी तक एड्रेस ले जाने वाली बस कौन-सी है?",opts:["Address Bus","Data Bus","Control Bus","Power Bus"],ans:0,exp:"Address Bus मेमोरी स्थान की जानकारी ले जाती है।"}
  },
  {type:"mcq",diff:"hard",
   en:{q:"Which component manages communication between CPU, RAM and peripherals on the motherboard?",opts:["Chipset","Speaker","Monitor","Scanner"],ans:0,exp:"Chipset controls data flow between major hardware components."},
   hi:{q:"मदरबोर्ड पर CPU, RAM और परिधीय उपकरणों के बीच संचार कौन नियंत्रित करता है?",opts:["Chipset","Speaker","Monitor","Scanner"],ans:0,exp:"Chipset प्रमुख हार्डवेयर घटकों के बीच डेटा प्रवाह नियंत्रित करता है।"}
  },
  {type:"mcq",diff:"hard",
   en:{q:"What is the main advantage of SSD over HDD?",opts:["Faster performance","Lower resolution","Larger monitor size","More CPU cores"],ans:0,exp:"SSD provides significantly faster read/write speeds."},
   hi:{q:"HDD की तुलना में SSD का मुख्य लाभ क्या है?",opts:["अधिक तेज़ प्रदर्शन","कम रिज़ॉल्यूशन","बड़ा मॉनिटर आकार","अधिक CPU कोर"],ans:0,exp:"SSD पढ़ने और लिखने की गति में काफी तेज़ होता है।"}
  },
  {type:"mcq",diff:"hard",
   en:{q:"Which bus carries control signals between CPU and other components?",opts:["Control Bus","Data Bus","Address Bus","Expansion Bus"],ans:0,exp:"Control bus transmits command and timing signals."},
   hi:{q:"CPU और अन्य घटकों के बीच नियंत्रण संकेत ले जाने वाली बस कौन-सी है?",opts:["Control Bus","Data Bus","Address Bus","Expansion Bus"],ans:0,exp:"Control Bus कमांड और टाइमिंग सिग्नल भेजती है।"}
  },
  {type:"mcq",diff:"hard",
   en:{q:"What is the main function of the chipset on a motherboard?",opts:["Manage communication between components","Display graphics","Store files","Provide audio output"],ans:0,exp:"Chipset controls data flow among CPU, memory and peripherals."},
   hi:{q:"मदरबोर्ड के चिपसेट का मुख्य कार्य क्या है?",opts:["घटकों के बीच संचार प्रबंधित करना","ग्राफिक्स प्रदर्शित करना","फाइल संग्रहित करना","ऑडियो आउटपुट देना"],ans:0,exp:"चिपसेट CPU, मेमोरी और परिधीय उपकरणों के बीच डेटा प्रवाह नियंत्रित करता है।"}
  },
  {type:"tf",diff:"hard",
   en:{q:"Firmware is software embedded into hardware devices.",opts:["True","False"],ans:0,exp:"Firmware provides low-level control for hardware."},
   hi:{q:"फर्मवेयर हार्डवेयर उपकरणों में अंतर्निहित सॉफ्टवेयर होता है।",opts:["सही","गलत"],ans:0,exp:"फर्मवेयर हार्डवेयर के निम्न-स्तरीय नियंत्रण के लिए उपयोग होता है।"}
  },
  {type:"mcq",diff:"hard",
   en:{q:"Which memory stores the most frequently used CPU instructions for fastest access?",opts:["L1 Cache","HDD","DVD","ROM"],ans:0,exp:"L1 cache is the fastest cache memory closest to CPU cores."},
   hi:{q:"CPU द्वारा सबसे अधिक उपयोग किए जाने वाले निर्देशों को सबसे तेज़ एक्सेस के लिए कौन-सी मेमोरी संग्रहित करती है?",opts:["L1 Cache","HDD","DVD","ROM"],ans:0,exp:"L1 Cache CPU के सबसे निकट और सबसे तेज़ कैश मेमोरी होती है।"}
  },
  {type:"mcq",diff:"hard",
   en:{q:"Which interface provides much higher SSD speeds than traditional SATA?",opts:["NVMe","PS/2","VGA","RJ45"],ans:0,exp:"NVMe uses PCIe lanes for very high-speed storage access."},
   hi:{q:"पारंपरिक SATA की तुलना में SSD को अधिक गति देने वाला इंटरफेस कौन-सा है?",opts:["NVMe","PS/2","VGA","RJ45"],ans:0,exp:"NVMe PCIe लेन का उपयोग करके उच्च गति प्रदान करता है।"}
  },
  {type:"mcq",diff:"hard",
   en:{q:"What is the primary advantage of cache memory?",opts:["Reduce CPU access time","Increase monitor size","Improve printer speed","Store backups"],ans:0,exp:"Cache reduces the time required for CPU to access frequently used data."},
   hi:{q:"कैश मेमोरी का मुख्य लाभ क्या है?",opts:["CPU एक्सेस समय कम करना","मॉनिटर आकार बढ़ाना","प्रिंटर गति बढ़ाना","बैकअप संग्रहित करना"],ans:0,exp:"कैश बार-बार उपयोग होने वाले डेटा तक CPU की पहुंच तेज़ बनाती है।"}
  }
]; 