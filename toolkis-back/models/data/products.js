import Product from "../Products.js";
import "../../config/database.js";
import "dotenv/config.js";

let products = [
  {
    "name": "Cordless Drill",
    "brand": "DeWalt",
    "category": "Power Tools",
    "subcategory": "Drilling",
    "stock": 50,
    "description":
    "The DeWalt cordless drill is a powerful and reliable tool that caters to the needs of professionals and DIY enthusiasts alike. With its ergonomic design and high-performance motor, this drill makes drilling holes and driving screws into a variety of materials, from wood to metal and concrete, a breeze. The DeWalt brand is known for its quality and durability, ensuring that this drill will serve you well for many future projects. The high-capacity lithium-ion battery provides long-lasting power and allows for cordless, worry-free operation. Whether you're building furniture or tackling home repairs, the DeWalt cordless drill is a trustworthy choice.",
    "photo":"https://cdn.mscdirect.com/global/images/ProductImages/7136229-24.jpg",
    "price": 100,
    "details": {
        "PowerSupply": "Battery powered",
        "Speeds": "1500 rpm",
        "Voltage": "20 volts",
        "Amperage": "1.3 Amps",
        "Material": "Steel",
        "ItemWeight":"3.64 pound",
        "ItemDimensions": "13.88 x 9.88 x 4.25 inches" 
      }
  },
  {
    "name": "Cordless Drill",
    "brand": "Makita",
    "category": "Power Tools",
    "subcategory": "Drilling",
    "stock": 78,
    "description":
      "The Makita cordless drill is a popular choice among construction professionals and DIY enthusiasts. The Makita brand is renowned for its innovation and performance, and this drill is no exception. With a powerful motor and a compact design, it's ideal for drilling and driving tasks in tight spaces. The high-quality lithium-ion battery ensures long runtime and fast recharging. Whether you're constructing a structure or installing shelves, the Makita cordless drill provides the power and precision you need.",
    "photo":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2FKVk3L8CdBLu8QirmgkJgX6a52_RXwHNjTigvKW1QD6v3kxKx6srxaxlTExk9YEuhfc&usqp=CAU",
      "price" : 120,
"details": {
  "PowerSupply": "Battery powered",
  "Speeds": "1300 rpm",
  "Voltage": "20 volts",
  "Amperage": "1.3 Amps",
  "Material": "Steel",
  "ItemWeight":"4.13 pound",
  "ItemDimensions": "13.88 x 7.88 x 5.25 inches" 
}  },
  {
    "name": "Cordless Drill",
    "brand": "Bosch",
    "category": "Power Tools",
    "subcategory": "Drilling",
    "stock": 100,
    "description":
      "The Bosch cordless drill is a reliable tool for construction and renovation projects. The Bosch brand is known for its precision engineering, and this drill is no different. With enough power to drill holes in hardwood and a variety of other materials, this drill delivers exceptional performance. Its compact and ergonomic design makes it easy to handle, even in tight spaces. The high-performance battery ensures long runtime and quick charging. Whether you're a professional or a DIY enthusiast, the Bosch cordless drill is a dependable choice.",
    "photo":
      "https://www.gigatools.ph/cdn/shop/products/gsr_180_shopify.jpg?v=1587399374",
      "price": 150,
      "details": {
        "PowerSupply": "Battery powered",
        "Speeds": "1400 rpm",
        "Voltage": "20 volts",
        "Amperage": "1.3 Amps",
        "Material": "Steel",
        "ItemWeight":"3 pound",
        "ItemDimensions": "12.85 x 8 x 4.25 inches" 
      }
  },
  {
    "name": "Milwaukee Circular Saw",
    "brand": "Milwaukee",
    "category": "Power Tools",
    "subcategory": "Cutting",
    "stock": 9,
    "description": "Milwaukee Circular Saws are the go-to choice for fast and precise wood, board, and material cutting. Offering outstanding power and versatility, these saws are essential for a wide range of applications. Whether you're a professional or a DIY enthusiast, Milwaukee Circular Saws provide the cutting precision and performance you need.",
    "photo": "https://images.thdstatic.com/productImages/97d1ac60-e061-4bed-8b6c-2aff79a4e840/svn/milwaukee-circular-saws-2630-20-64_600.jpg"
    ,"price": 200,
    "details":{
        "PowerSupply": "Battery powered",
        "Speeds": "3500 rpm",
        "Voltage": "18 volts",
        "Amperage": "15 Amps",
        "Material": "Steel",
        "ItemWeight":"3.81 kg",
        "ItemDimensions": "12.25 x 8.5 x 8 inches" 
  }
},
  {
    "name": "Circular Saw",
    "brand": "RIDGID",
    "category": "Power Tools",
    "subcategory": "Cutting",
    "stock": 64,
    "description": "RIDGID Circular Saws are the ideal choice for quick and precise cutting of wood, boards, and various materials. These saws offer power and versatility for a wide range of cutting applications. Whether you're working on a construction project or a DIY task, RIDGID Circular Saws provide the cutting performance you can rely on.",
    "photo": "https://cdn2.ridgid.com/resources/images/7f8d5258-0dd2-4198-9b12-443b7f8ac2f2",
    "price": 250,
    "details": {
      "PowerSupply": "Battery powered",
        "Speeds": "3000 rpm",
        "Voltage": "18 volts",
        "Amperage": "15 Amps",
        "Material": "Steel",
        "ItemWeight":"3.90 kg",
        "ItemDimensions": "15.32 x 8.98 x 9.14 inches"
    }
  },
  {
    "name": "Circular Saw",
    "brand": "Festool",
    "category": "Power Tools",
    "subcategory": "Cutting",
    "stock": 76,
    "description": "Festool Circular Saws are renowned for their precision and reliability in wood, board, and material cutting tasks. They offer exceptional power and versatility for a variety of cutting applications. Whether you're a professional woodworker or a craftsman, Festool Circular Saws are your trusted tool for precise and efficient cuts.",
    "photo": "https://media.screwfix.com/is/image/ae235/245PF_P",
    "price": 300,
    "details":{
        "PowerSupply": "1500 w",
        "Speeds": "3500 rpm",
        "Voltage": "18 volts",
        "Amperage": "13 Amps",
        "Material": "Steel",
        "ItemWeight":"4.80 kg",
        "ItemDimensions": "12.25 x 8.5 x 8 inches"
    }
  },

  {
    "name": "Reciprocating Saw",
    "brand": "Hilti",
    "category": "Power Tools",
    "subcategory": "Cutting",
    "stock": 25,
    "description": "The Hilti Reciprocating Saw is a powerful tool designed for aggressive cutting in various construction materials, tree branches, and demolition work. It offers robust performance and versatility, making it a go-to choice for professionals in need of precision and speed.",
    "photo": "https://dam-assets.apps.travisperkins.group/oz8y6l0/GPID_1100688340_IMG_00.jpg?width=450&height=300",
    "price": 400,
    "details":{
        "PowerSupply": " Battery powered",
        "Speeds": "2600 strokes per minute",
        "Voltage": "18 volts",
        "Amperage": "13 Amps",
        "Material": "Steel",
        "ItemWeight":"3.1 kg",
        "ItemDimensions": "455 x 91 x 156 mm"
    }
  },
  {
    "name": "Reciprocating Saw",
    "brand": "Ryobi",
    "category": "Power Tools",
    "subcategory": "Cutting",
    "stock": 30,
    "description": "The Ryobi Reciprocating Saw is a powerful tool designed for aggressive cutting in a variety of materials, including wood and metal. It excels in demolition and remodeling tasks, offering reliable performance for both professionals and DIY enthusiasts.",
    "photo": "https://media.diy.com/is/image/Kingfisher/ryobi-one-18v-cordless-reciprocating-saw-rrs1801m-bare~4892210118707_01bq?$MOB_PREV$&$width=768&$height=768"
    ,"price": 100,
    "details": {
        "PowerSupply": " Battery powered",
        "Speeds": "2400 strokes per minute",
        "Voltage": "18 volts",
        "Amperage": "13 Amps",
        "Material": "Steel",
        "ItemWeight":"1.8 kg",
        "ItemDimensions": "17.91 x 6.77 x 3.46 inches"
    }
  },
  {
    "name": "Reciprocating Saw",
    "brand": "SKIL",
    "category": "Power Tools",
    "subcategory": "Cutting",
    "stock": 20,
    "description": "The SKIL Reciprocating Saw is a versatile cutting tool that delivers precision and power. Whether you're tackling demolition or cutting through various materials, this tool is up for the challenge. It's a must-have for any workshop or construction site.",
    "photo": "https://i5.walmartimages.com/asr/acec749f-db20-4b23-a5d3-48de9962f0cf_1.24dfe65a582b844970abd940e8f0c25f.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    "price": 80,
    "details": {
        "PowerSupply": "Electrical cable",
        "Speeds": "2500 strokes per minute",
        "Voltage": "120 volts",
        "Amperage": "13 Amps",
        "Material": "Steel",
        "ItemWeight":"9 pounds",
        "ItemDimensions": "19.7 x 3.6 x 8 inches"
    }
  },
  {
    "name": "Orbital Sander",
    "brand": "Porter-Cable",
    "category": "Power Tools",
    "subcategory": "Cutting",
    "stock": 15,
    "description": "The Porter-Cable Orbital Sander is a versatile tool for achieving smooth and uniform surfaces. It excels in sanding tasks, offering efficiency and precision for various woodworking and finishing projects. Whether you're a professional woodworker or a DIY enthusiast, this sander is a valuable addition to your toolkit.",
    "photo": "https://m.media-amazon.com/images/I/71N99TZfDTL.jpg",
    "price": 70,
    "details": {
        "PowerSupply": " Battery powered",
        "Speeds": "12000 rpm",
        "Voltage": "20 volts",
        "Amperage": "20 Amps",
        "Material": "Steel",
        "ItemWeight":"4 kg",
        "ItemDimensions": "9.84 x 6.3 x 8.07 inches"
    }
  },
  {
    "name": "Orbital Sander",
    "brand": "Craftsman",
    "category": "Power Tools",
    "subcategory": "Cutting",
    "stock": 20,
    "description": "The Craftsman Orbital Sander is designed for achieving a flawless finish on your woodworking and refinishing projects. It provides exceptional sanding performance, making it a reliable choice for both professionals and DIYers. Whether you're smoothing surfaces or preparing them for paint or stain, Craftsman has you covered.",
    "photo": "https://m.media-amazon.com/images/I/71U8G0kbNKL._AC_UF894,1000_QL80_.jpg",
    "price": 70,
    "details":{
        "PowerSupply": "Electrical cable",
        "Speeds": "12000 rpm",
        "Voltage": "20 volts",
        "Amperage": "3 Amps",
        "Material": "Steel",
        "ItemWeight":"2.9 pounds",
        "ItemDimensions": "10.13 x 5.5 x 5.75 inches"
    }
  },
  {
    "name": "Orbital Sander",
    "brand": "AEG",
    "category": "Power Tools",
    "subcategory": "Cutting",
    "stock": 18,
    "description": "The AEG Orbital Sander is a precision tool that delivers exceptional sanding results. With its ergonomic design and efficient performance, it's a valuable asset for professionals and woodworking enthusiasts alike. Whether you're working on intricate detailing or larger surfaces, AEG ensures a smooth and refined finish.",
    "photo": "https://cdn.hoffmann-group.com/derivatives/8481/jpg_1200/jpg_1200_b077321_ex150e.jpg",
    "price": 130,
    "details":{
      "PowerSupply": "Electrical cable",
      "Speeds": "15000 rpm",
      "Voltage": "20 volts",
      "Amperage": "3 Amps",
      "Material": "Steel",
      "ItemWeight":"1.5 kg",
      "ItemDimensions": "10.13 x 5.5 x 5.75 inches"
    }
  },

  {
    "name": "Drilling Machine",
    "brand": "Bosch",
    "category": "Power Tools",
    "subcategory": "Drilling",
    "stock": 25,
    "description": "The Bosch Drilling Machine is a reliable tool for all your drilling needs. It offers precision and power, making it ideal for drilling holes in various materials, from wood to metal. Whether you're a professional contractor or a DIY enthusiast, Bosch ensures efficient drilling performance.",
    "photo": "https://www.liontoolsmart.com/cdn/shop/products/BOSCH-IMPACT-DRILL-GSB-501-13-MM-1.jpg?v=1610364590",
    "price": 150,
    "details": {"PowerSupply": "Electrical cable",
    "Speeds": "3",
    "Voltage": "120 volts",
    "Amperage": "8.5 Amps",
    "Material": "Plastic",
    "ItemWeight":"6.9 pounds",
    "ItemDimensions": "17.4 x 3.5 x 8.5 inches"
  }},
  {
    "name": "Drill Press",
    "brand": "DeWalt",
    "category": "Power Tools",
    "subcategory": "Drilling",
    "stock": 30,
    "description": "The DeWalt Drill Press is a sturdy and versatile tool for accurate drilling. It's perfect for both home workshops and industrial settings. With its precise depth control and powerful motor, DeWalt makes drilling holes easier and more efficient.",
    "photo": "https://images.thdstatic.com/productImages/fcdc4ccc-9729-435e-a7d4-10911c871cb3/svn/dewalt-specialty-power-tools-dcd1623b-a0_600.jpg"
    ,"price": 350,
    "details": {
      "PowerSupply": "Electrical cable",
      "Speeds": "450 rpm",
      "Voltage": "240 volts",
      "Amperage": "10 Amps",
      "Material": "Mixture",
      "ItemWeight":"33 pounds",
      "ItemDimensions": "22.44 x 6.5 x 19.29 inches"
  }
  },
  {
    "name": "Cordless Welder",
    "brand": "Lincoln Electric",
    "category": "Power Tools",
    "subcategory": "Welding",
    "stock": 20,
    "description": "The Lincoln Electric Cordless Welder is a portable and efficient solution for welding tasks. Whether you're working on automotive repairs or metal fabrication, this cordless welder provides the flexibility and power needed for professional welding results.",
    "photo": "https://mobileimages.lowes.com/productimages/b5c726ad-199d-4ff7-82dd-709f62cbe862/50141926.jpg?size=pdhism",
    "price": 2000,
    "details": {
      "PowerSupply": "Lithium-ion battery",
      "Speeds": 5,
      "Voltage": "18V or 20V",
      "Amperage": "20A or 40A",
      "Material": "Aluminum",
      "ItemWeight": "5 lbs",
      "ItemDimensions": "12 x 8 x 6"
  }
  },
  {
    "name": "Welding Machine",
    "brand": "Miller",
    "category": "Power Tools",
    "subcategory": "Welding",
    "stock": 18,
    "description": "The Miller Welding Machine is a high-performance tool for welding applications. It offers exceptional control and versatility, making it a top choice for professional welders and metalworkers. Whether you're working with mild steel or aluminum, Miller ensures precise and reliable welds.",
    "photo": "https://millerweldseurope.com/wp-content/uploads/2020/12/welders_main_photo-1024x1024.jpg",
    "price": 3500,
    "details": {
      
        "PowerSupply": "Single-phase",
        "Speeds": "1-10",
        "Voltage": "230V",
        "Amperage": "200A",
        "Material": "Steel",
        "ItemWeight": "100",
        "ItemDimensions": "36 x 24 x 18 inches"
      
    }
  },

  {
    "name": "Welding Torch",
    "brand": "Hobart",
    "category": "Power Tools",
    "subcategory": "Welding",
    "stock": 15,
    "description": "The Hobart Welding Torch is a dependable tool for various welding tasks. It's suitable for both MIG and TIG welding processes, offering precision and control. Whether you're a professional welder or tackling DIY projects, Hobart ensures consistent and high-quality welds.",
    "photo": "https://i.ebayimg.com/images/g/u0YAAOSwlFZexJUI/s-l1600.jpg",
    "price": 300,
    "details":{
      
        "PowerSupply": "Oxy-acetylene",
        "Speeds":  "1",
        "Voltage": "N/A",
        "Amperage": "100A",
        "Material": "Brass",
        "ItemWeight": "1",
        "ItemDimensions": "12 x 4  x 2 inches"
      
    }
  },
  {
    "name": "Pipe Wrench",
    "brand": "Ridgid",
    "category": "Hand Tools",
    "subcategory": "Plumbing",
    "stock": 20,
    "description": "The Ridgid Pipe Wrench is a heavy-duty tool designed for gripping and turning pipes. It features a sturdy construction and adjustable jaws, making it ideal for plumbing applications.",
    "photo": "https://5.imimg.com/data5/SELLER/Default/2021/11/XN/CT/QK/3902076/heavy-duty-pipe-wrench.jpg",
    "price": 30,
    "details": {
      "PowerSupply": "Manual",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Ductile iron",
      "ItemWeight": "2 lbs",
      "ItemDimensions": "10 x 6 x 4 inches"
      }
  },

  {
    "name": "Pipe Cutter",
    "brand": "Lenox",
    "category": "Hand Tools",
    "subcategory": "Plumbing",
    "stock": 18,
    "description": "The Lenox Pipe Cutter is a precision tool for cutting pipes with ease. Its sharp cutting wheel ensures clean and accurate cuts, making it indispensable for plumbing professionals.",
    "photo": "https://www.cutwithlenox.com/NAG/PRODUCT/IMAGES/HIRES/12121S1/12121S1_1.jpg?resize=530x530",
    "price": 70,
    "details": {
      "PowerSupply": "Manual",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Steel",
      "ItemWeight": "2",
      "ItemDimensions": "12 x 6 x 4 inches"
    }
  },

  {
    "name": "Masonry Trowel",
    "brand": "MARSHALLTOWN",
    "category": "Hand Tools",
    "subcategory": "Masonry",
    "stock": 25,
    "description": "The MARSHALLTOWN Masonry Trowel is a reliable tool for spreading mortar and leveling bricks or blocks. Its high-quality construction ensures durability and precise masonry work.",
    "photo": "https://cdn.aws.toolstation.com/images/141020-UK/800/58335.jpg",
    "price": 35,
    "details": {
      "PowerSupply": "Manual",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Steel",
      "ItemWeight": "2",
      "ItemDimensions": "12 x 6 x 4 inches"
    }
  },
  {
    "name": "Brick Hammer",
    "brand": "Estwing",
    "category": "Hand Tools",
    "subcategory": "Masonry",
    "stock": 20,
    "description": "The Estwing Brick Hammer is a rugged tool for chiseling and setting bricks. It features a comfortable grip and a balanced design for efficient masonry work.",
    "photo": "https://estwingtools.co.uk/media/catalog/product/cache/2796159956acad2253e75d1727a8c241/e/s/estwing-brick-hammer-smooth-face-20-oz-blue-nylon-grip-e320blc.jpg",
    "price": 30,
    "details": {

      "PowerSupply": "Manual",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Steel",
      "ItemWeight": "2.5 lbs.",
      "ItemDimensions": "11 x 6 x 4 inches"
    }
  },
  {
    "name": "Masonry Chisel",
    "brand": "IRWIN",
    "category": "Hand Tools",
    "subcategory": "Masonry",
    "stock": 15,
    "description": "The IRWIN Masonry Chisel is a versatile tool for cutting or shaping bricks and stones. It offers precision and durability, making it a valuable addition to any mason's toolkit.",
    "photo": "https://www.irwintools.com/NAG/PRODUCT/IMAGES/HIRES/1992668/1992668_2.jpg?resize=530x530",
    "price": 10,
    "details": {
      
      "PowerSupply": "Manual",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Steel",
      "ItemWeight": "1.5 lbs.",
      "ItemDimensions": "10 x 5 x 3 inches"
    }
  },

  {
    "name": "Utility Knife",
    "brand": "Stanley",
    "category": "Hand Tools",
    "subcategory": "Cutting",
    "stock": 30,
    "description": "The Stanley Utility Knife is a versatile cutting tool for various materials, including cardboard, carpet, and plastic. Its retractable blade ensures safety and convenience.",
    "photo": "https://images.thdstatic.com/productImages/2c87896d-bb7e-46ab-9889-df7b63a2c556/svn/stanley-utility-knives-stht10479-64_1000.jpg",
    "price": 15,
    "details": {
      
      "PowerSupply": "Manual",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Plastic and metal",
      "ItemWeight": "0.5 lbs.",
      "ItemDimensions": "6 x 2 x 1 inches"
    }
  },
  {
    "name": "Hacksaw",
    "brand": "DEWALT",
    "category": "Hand Tools",
    "subcategory": "Cutting",
    "stock": 22,
    "description": "The DEWALT Hacksaw is a durable and adjustable tool for cutting metal and plastic. It provides reliable cutting performance for a wide range of applications.",
    "photo": "https://www.dewalt.com/NAG/PRODUCT/IMAGES/HIRES/DWHT20547/DWHT20547_1.jpg",
    "price": 25,
    "details": {
      
      "PowerSupply": "Manual",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Metal and plastic",
      "ItemWeight": "1 lb.",
      "ItemDimensions": "12 x 4 x 2 inches"
    }
  },
  {
    "name": "Pruning Shears",
    "brand": "Fiskars",
    "category": "Hand Tools",
    "subcategory": "Cutting",
    "stock": 18,
    "description": "The Fiskars Pruning Shears are perfect for trimming branches and bushes. They offer sharp blades and ergonomic handles for comfortable and precise pruning.",
    "photo": "https://images.thdstatic.com/productImages/a129e29d-0af8-4abf-9a5d-5e324c58ce78/svn/fiskars-pruning-shears-399242-1003-64_1000.jpg",
    "price": 25,
    "details": {
      
      "PowerSupply": "Manual",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Steel and plastic",
      "ItemWeight": "1 lb.",
      "ItemDimensions": "10 x 6 x 2 inches"
    }
  },
  {
    "name": "Screwdriver Set",
    "brand": "Klein Tools",
    "category": "Hand Tools",
    "subcategory": "Fastening",
    "stock": 28,
    "description": "The Klein Tools Screwdriver Set is a comprehensive set of screwdrivers for various fastening tasks. It features durable tips and comfortable grips for efficient screwdriving.",
    "photo": "https://acdn.mitiendanube.com/stores/001/546/946/products/d_nq_np_2x_753977-mla51521139785_092022-f1-9c077525749b682eb416657512112007-640-0.png",
    "price": 35,
    "details": {
      
      "PowerSupply": "Manual",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Steel and plastic",
      "ItemWeight": "1.5 lbs.",
      "ItemDimensions": "12 x 8 x 4 inches"
    }
  },
  {
    "name": "Staple Gun",
    "brand": "Arrow Fastener",
    "category": "Hand Tools",
    "subcategory": "Fastening",
    "stock": 24,
    "description": "The Arrow Fastener Staple Gun is a reliable tool for fastening staples in various materials. It's suitable for upholstery, carpentry, and DIY projects.",
    "photo": "https://images.thdstatic.com/productImages/8a62c012-ac04-4946-b4a6-7c8b43485c82/svn/arrow-staple-guns-t50-64_1000.jpg",
    "price": 25,
    "details": {
      
      "PowerSupply": "Manual or electric",
      "Speeds": "1",
      "Voltage": "N/A (if electric)" ,
      "Amperage": "N/A (if electric)" ,
      "Material": "Metal and plastic",
      "ItemWeight": "1-2 lbs.",
      "ItemDimensions": "10 x 5 x 3 inches"
    }
  },
  {
    "name": "C-Clamp",
    "brand": "IRWIN",
    "category": "Hand Tools",
    "subcategory": "Fastening",
    "stock": 20,
    "description": "The IRWIN C-Clamp is a versatile tool for clamping and securing materials. It offers strong clamping force and a durable construction for a wide range of applications.",
    "photo": "https://www.irwintools.com/NAG/PRODUCT/IMAGES/HIRES/225134/225134_P1.jpg?resize=530x530",
    "price": 13,
    "details":  {
    "PowerSupply": "Manual",
    "Speeds": "1",
    "Voltage": "N/A",
    "Amperage": "N/A",
    "Material": "Steel and plastic",
    "ItemWeight": "1-5 lbs.",
    "ItemDimensions": "6 x 4 x 2 inches"
  }
},
  {
    "name": "Tape Measure",
    "brand": "Milwaukee",
    "category": "Hand Tools",
    "subcategory": "Measuring",
    "stock": 35,
    "description": "The Milwaukee Tape Measure is a reliable tool for accurate measurements. It features a durable tape and a comfortable grip for easy measuring in various applications.",
    "photo": "https://static.grainger.com/rp/s/is/image/Grainger/55ED61_AS01",
    "price": 10,
    "details": {
      
      "PowerSupply": "Manual",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Metal and plastic",
      "ItemWeight": "1-2 lbs.",
      "ItemDimensions": "12 x 6 x 2 inches"
    }
  },
  {
    "name": "Spirit Level",
    "brand": "Stanley",
    "category": "Hand Tools",
    "subcategory": "Measuring",
    "stock": 30,
    "description": "The Stanley Spirit Level is a precision tool for ensuring level and plumb surfaces. It's ideal for construction and woodworking projects.",
    "photo": "https://homedevo.com/images/detailed/11/51fAvRYGeTL._SL1200_.jpg",
    "price": 25
,
"details": {
  
  "PowerSupply": "Manual",
  "Speeds": "1",
  "Voltage": "N/A",
  "Amperage": "N/A",
  "Material": "Aluminum and plastic",
  "ItemWeight": "1-2 lbs.",
  "ItemDimensions": "12 x 3 x 2 inches"
}
  },
  {
    "name": "Calipers",
    "brand": "Mitutoyo",
    "category": "Hand Tools",
    "subcategory": "Measuring",
    "stock": 25,
    "description": "The Mitutoyo Calipers are high-precision measuring tools for accurate inside and outside measurements. They are essential for quality control and machining tasks.",
    "photo": "https://images-na.ssl-images-amazon.com/images/I/61jqF9qzJyL._SS400_.jpg",
    "price": 180,
    "details": {
      
      "PowerSupply": "Manual or digital",
      "Speeds": "1",
      "Voltage": "N/A (if digital)",
      "Amperage": "N/A (if digital)",
      "Material": "Steel and plastic",
      "ItemWeight": "1-2 lbs.",
      "ItemDimensions": "6 x 4 x 2 inches"
    }
  },
  {
    "name": "Adjustable Pliers",
    "brand": "Channellock",
    "category": "Hand Tools",
    "subcategory": "Pliers and clamps",
    "stock": 20,
    "description": "The Channellock Adjustable Pliers are versatile tools for gripping and turning various objects. They offer adjustable jaws for a wide range of applications.",
    "photo": "https://da.lowes.ca/webassets/images/97341_09865964_l.jpg",
    "price": 33,
    "details": {
      
      "PowerSupply": "Manual",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Steel and plastic",
      "ItemWeight": "1-2 lbs.",
      "ItemDimensions": "8 x 4 x 2 inches"
    }
  },
  {
    "name": "Needle-Nose Pliers",
    "brand": "KNIPEX",
    "category": "Hand Tools",
    "subcategory": "Pliers and clamps",
    "stock": 15,
    "description": "The KNIPEX Needle-Nose Pliers are precision tools for fine gripping and bending tasks. They feature long, slender jaws for accessing tight spaces.",
    "photo": "https://www.lewiscontractorsales.com/Merchant2/graphics/00000002/24824.jpg",
    "price": 34,
    "details": {
      
      "PowerSupply": "Manual",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Steel and plastic",
      "ItemWeight": "1 lb.",
      "ItemDimensions": "6 x 4 x 2 inches"
    }
  },
  {
    "name": "Adjustable Wrench",
    "brand": "Craftsman",
    "category": "Hand Tools",
    "subcategory": "Pliers and clamps",
    "stock": 18,
    "description": "The Craftsman Adjustable Wrench is a versatile tool for turning nuts and bolts. It offers adjustable jaws and a comfortable grip for various applications.",
    "photo": "https://m.media-amazon.com/images/I/514VA1R9D7S.jpg",
    "price": 15
    ,
    "details": {
      
      "PowerSupply": "Manual",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Chrome vanadium steel",
      "ItemWeight": "1-2 lbs.",
      "ItemDimensions": "8 x 4 x 2 inches"
    }
  },

  {
    "name": "Plunger",
    "brand": "General Wire Spring",
    "category": "Hand Tools",
    "subcategory": "Plumbing",
    "stock": 15,
    "description": "The General Wire Spring Plunger is a versatile tool for clearing clogged drains and pipes. It creates strong suction for effective plunging, making it a must-have for every plumber.",
    "photo": "https://www.matildaexpress.com.ar/wp-content/uploads/2021/06/SOPAPA.png",
    "price": 15,
    "details": {
      
      "PowerSupply": "Manual",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Steel and plastic",
      "ItemWeight": "1 lb.",
      "ItemDimensions": "6 x 4 x 2 inches"
    }
  },

  {
    "name": "Plumber's Snake",
    "brand": "Superior Tool",
    "category": "Hand Tools",
    "subcategory": "Plumbing",
    "stock": 12,
    "description": "The Superior Tool Plumber's Snake is perfect for clearing stubborn clogs in drains and pipes. It's a flexible and durable tool that gets the job done.",
    "photo": "https://www.ellagar.com/SERV_ADMIN_FILES/Archivos/Imagenes/Articulos_MED/7084045_MED.jpg",
    "price": 17,
    "details": {
      
      "PowerSupply": "Manual",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Steel and plastic",
      "ItemWeight": "2-3 lbs.",
      "ItemDimensions": "36 x 12 x 6 inches"
    }
  },
  {
    "name": "Adjustable Pipe Wrench",
    "brand": "Craftsman",
    "category": "Hand Tools",
    "subcategory": "Plumbing",
    "stock": 14,
    "description": "The Craftsman Adjustable Pipe Wrench is a versatile tool designed for gripping and turning pipes of various sizes. It offers precise adjustments and a comfortable grip.",
    "photo": "https://m.media-amazon.com/images/I/514VA1R9D7S._AC_UF894,1000_QL80_.jpg",
    "price": 18,
    "details": {

      "PowerSupply": "Manual",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Ductile iron",
      "ItemWeight": "2-3 lbs.",
      "ItemDimensions": "10 x 6 x 4 inches"
    }
  },
 
  {
    "name": "Tile Saw",
    "brand": "DEWALT",
    "category": "Hand Tools",
    "subcategory": "Masonry",
    "stock": 18,
    "description": "The DEWALT Tile Saw is a high-performance tool for cutting ceramic and stone tiles. It provides accurate cuts and is essential for tile installation projects.",
    "photo": "https://cca.dewalt.global/LAG/PRODUCT/IMAGES/HIRES/D24000/D24000_4.jpg?resize=530x530",
    "price": 700,
    "details": {
      
      "PowerSupply": "Electric",
      "Speeds": "1",
      "Voltage": "120V",
      "Amperage": "10A",
      "Material": "Steel and plastic",
      "ItemWeight": "20-30 lbs.",
      "ItemDimensions": "18 x 12 x 6 inches"
    }
  },
  {
    "name": "Mortar Mixing Paddle",
    "brand": "QEP",
    "category": "Hand Tools",
    "subcategory": "Masonry",
    "stock": 12,
    "description": "The QEP Mortar Mixing Paddle is designed for efficiently mixing mortar, grout, and other construction materials. It's a must-have tool for masonry and tile work.",
    "photo": "https://images.thdstatic.com/productImages/07dc47ec-3593-4e1c-aa05-f925e41d381f/svn/qep-mortar-mixers-61205-64_1000.jpg",
    "price": 17,
    "details": {
      
      "PowerSupply": "Manual or electric",
      "Speeds": "1",
      "Voltage": "N/A (if electric)",
      "Amperage": "N/A (if electric)",
      "Material": "Steel and plastic",
      "ItemWeight": "1-2 lbs.",
      "ItemDimensions": "12 x 6 x 2 inches"
    }
  },
  {
    "name": "Bolt Cutter",
    "brand": "KNIPEX",
    "category": "Hand Tools",
    "subcategory": "Cutting",
    "stock": 16,
    "description": "The KNIPEX Bolt Cutter is a heavy-duty tool designed for cutting through bolts, chains, and wire mesh. Its powerful jaws provide clean and effortless cuts.",
    "photo": "https://cdn11.bigcommerce.com/s-9t4wk8/images/stencil/2000x2000/products/28449/61707/New_Cobolts__34008.1592846043.jpg?c=4",
    "price": 75,
    "details": {
      "PowerSupply": "Manual",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Chrome vanadium steel",
      "ItemWeight": "1-2 lbs.",
      "ItemDimensions": "8 x 4 x 2 inches"
    }
  },
  {
    "name": "Duct Cutter",
    "brand": "IRWIN",
    "category": "Hand Tools",
    "subcategory": "Cutting",
    "stock": 14,
    "description": "The IRWIN Duct Cutter is a specialized tool for cutting ductwork and sheet metal. Its serrated blades ensure precise and efficient cuts in HVAC installations.",
    "photo": "https://m.media-amazon.com/images/I/51lGgSMx9ZL._AC_UF1000,1000_QL80_.jpg",
    "price": 11,
    "details": {
      "PowerSupply": "Manual",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Steel and plastic",
      "ItemWeight": "1 lb.",
      "ItemDimensions": "6 x 4 x 2 inches"
    }
  },
 
  {
    "name": "Screwdriver Bit Set",
    "brand": "DEWALT",
    "category": "Hand Tools",
    "subcategory": "Fastening",
    "stock": 24,
    "description": "The DEWALT Screwdriver Bit Set includes a wide range of bits for various screw types. They are made from high-quality materials for long-lasting performance.",
    "photo": "https://www.dewalt.com.au/EMEA/PRODUCT/IMAGES/HIRES/DW2166/DW2166_1.jpg?resize=530x530",
    "price": 28,
    "details": {
      "PowerSupply": "N/A",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Steel and plastic",
      "ItemWeight": "1-2 lbs.",
      "ItemDimensions": "6 x 4 x 2 inches"
    }
  },
  {
    "name": "Quick Release Clamp",
    "brand": "Bessey",
    "category": "Hand Tools",
    "subcategory": "Fastening",
    "stock": 16,
    "description": "The Bessey Quick Release Clamp is designed for one-handed operation. It provides rapid and secure clamping for woodworking and DIY projects.",
    "photo": "https://www.ultimatetools.ca/cdn/shop/products/Bessey_GTR_Series_Quick_Track_Clamp_BES-GTR16S6H.jpg?v=1600009858",
    "price": 46,
    "details": {

      "PowerSupply": "Manual",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Steel and plastic",
      "ItemWeight": "1-2 lbs.",
      "ItemDimensions": "6 x 4 x 2 inches"
    }
  },
  {
    "name": "Digital Protractor",
    "brand": "Wixey",
    "category": "Hand Tools",
    "subcategory": "Measuring",
    "stock": 22,
    "description": "The Wixey Digital Protractor provides precise angle measurements for woodworking and metalworking projects. It offers an easy-to-read digital display.",
    "photo": "https://i5.walmartimages.com/asr/9bbcd9cc-d230-41f3-a818-a1cf87002909_1.d6f67a1fa1394feb6da26afd7a29b7f6.jpeg",
    "price": 46,
    "details": {
      
      "PowerSupply": "Battery",
      "Speeds": "1",
      "Voltage": "3V",
      "Amperage": "0.1A",
      "Material": "Plastic",
      "ItemWeight": "1 lb.",
      "ItemDimensions": "6 x 4 x 2 inches"
    }
  },
  {
    "name": "Distance Measurer",
    "brand": "Bosch",
    "category": "Hand Tools",
    "subcategory": "Measuring",
    "stock": 18,
    "description": "The Bosch Distance Measurer uses laser technology to accurately measure distances. It's a convenient tool for construction and layout tasks.",
    "photo": "https://www.bosch-professional.com/es/es/ocsmedia/337111-54/application-image/1434x828/medidor-laser-de-distancias-glm-40-0601072900.png",
    "price": 132,
    "details": {
      
      "PowerSupply": "Battery",
      "Speeds": "1",
      "Voltage": "3V",
      "Amperage": "0.1A",
      "Material": "Plastic",
      "ItemWeight": "1 lb.",
      "ItemDimensions": "6 x 4 x 2 inches"
    }
  },
  {
    "name": "Groove Joint Pliers",
    "brand": "Irwin VISE-GRIP",
    "category": "Hand Tools",
    "subcategory": "Pliers and clamps",
    "stock": 12,
    "description": "The Irwin VISE-GRIP Groove Joint Pliers are designed for gripping and adjusting pipes and other objects. They feature a groove joint for versatility.",
    "photo": "https://i5.walmartimages.com/asr/820a0703-1e33-4e61-a0b6-2093d6a6bdb3.4cb45060d02d172d4c31bbedfe8eb044.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    "price": 10,
    "details": 
    {
      
      "PowerSupply": "Manual",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Steel and plastic",
      "ItemWeight": "1-2 lbs.",
      "ItemDimensions": "8 x 4 x 2 inches"
    }
  },
  {
    "name": "Locking Pliers",
    "brand": "Stanley",
    "category": "Hand Tools",
    "subcategory": "Pliers and clamps",
    "stock": 14,
    "description": "The Stanley Locking Pliers provide a secure grip on objects that need to be clamped or held in place. They are versatile and easy to adjust for various tasks.",
    "photo": "https://cdn11.bigcommerce.com/s-6sy7my5b50/images/stencil/1280x1280/products/5847/23151/file-input-1667320096957__86225.1667320098.1280.1280__07838.1678114342.jpg?c=1",
    "price": 15,
    "details": {
      "PowerSupply": "Manual",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Steel and plastic",
      "ItemWeight": "1-2 lbs.",
      "ItemDimensions": "8 x 4 x 2 inches"
    }
  },
  {
    "name": "Galvanized Steel Screw",
    "brand": "Bosch",
    "category": "Hardware",
    "subcategory": "Fastening",
    "stock": 100,
    "description": "High-strength galvanized steel screws, ideal for fastening materials in construction and woodworking applications.",
    "photo": "https://www.part-on.co.uk/uploaded/thumbnails/db_file_img_16025_1024x1024.jpg",
    "price": 0.06,
    "details": {
  
      "PowerSupply": "N/A",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Galvanized",
      "ItemWeight": "0.1 oz.",
      "ItemDimensions": "1 x 0.25 x 0.25 inches"
    }
  },
  {
    "name": "Steel Nail",
    "brand": "Stanley",
    "category": "Hardware",
    "subcategory": "Fastening",
    "stock": 150,
    "description": "Durable steel nails for securing and fastening objects in wood and other materials.",
    "photo": "https://s8580.pcdn.co/wp-content/uploads/2015/01/Stanley-58-112-Steel-Nail-Set-324x324.jpg",
    "price": 0.03,
    "details": {
      "PowerSupply": "Manual",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Steel",
      "ItemWeight": "0.05 oz.",
      "ItemDimensions": "1 x 0.125 x 0.125 inches"
    }
  },
  {
    "name": "Self-Tapping Screw",
    "brand": "Makita",
    "category": "Hardware",
    "subcategory": "Fastening",
    "stock": 120,
    "description": "Quality self-tapping screws for drywall and mounting applications.",
    "photo": "https://www.lsengineers.co.uk/media/catalog/product/cache/2183975d50b12d1ff8f0f4c988893bcd/2/6/266429-2.jpg",
    "price": 0.07,
    "details": {
      
      "PowerSupply": "Manual or electric",
      "Speeds": "1",
      "Voltage": "N/A (if electric)",
      "Amperage": "N/A (if electric)",
      "Material": "Steel",
      "ItemWeight": "0.1 oz.",
      "ItemDimensions": "1 x 0.25 x 0.25 inches"
    }
  },
  {
    "name": "Bolt Nut",
    "brand": "DeWalt",
    "category": "Hardware",
    "subcategory": "Fastening",
    "stock": 80,
    "description": "High-strength bolt nuts for securing heavy-duty structures and equipment.",
    "photo": "https://m.media-amazon.com/images/I/51dA+hSZUzL._AC_UF350,350_QL50_.jpg",
    "price": 0.20,
    "details": {
      
      "PowerSupply": "Manual",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Steel",
      "ItemWeight": "0.2 oz.",
      "ItemDimensions": "1 x 0.5 x 0.5 inches"
    }
  },
  {
    "name": "Anchor Bolt",
    "brand": "Hilti",
    "category": "Hardware",
    "subcategory": "Fastening",
    "stock": 90,
    "description": "Anchor bolts designed for securely fastening objects to concrete and masonry.",
    "photo": "https://5.imimg.com/data5/ANDROID/Default/2020/12/LT/SH/SC/36071419/product-jpeg-500x500.jpg",
    "price": 0.50,
    "details": {
      
      "PowerSupply": "Manual or electric",
      "Speeds": "1",
      "Voltage": "N/A (if electric)",
      "Amperage": "N/A (if electric)",
      "Material": "Steel",
      "ItemWeight": "0.5 oz.",
      "ItemDimensions": "2 x 0.75 x 0.75 inches"
    }
  },
  {
    "name": "Drywall Anchor",
    "brand": "E-Z Ancor",
    "category": "Hardware",
    "subcategory": "Fastening",
    "stock": 110,
    "description": "Reliable drywall anchors for secure wall mounting of fixtures and decorations.",
    "photo": "https://mobileimages.lowes.com/productimages/e85b4017-93eb-4870-90f0-b6bbe0f2f084/45405206.jpg",
    "price": 0.10,
    "details": {
      
      "PowerSupply": "Manual",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Nylon",
      "ItemWeight": "0.1 oz.",
      "ItemDimensions": "1 x 0.25 x 0.25 inches"
    }
  },
  {
    "name": "Cable Tie",
    "brand": "VELCRO Brand",
    "category": "Hardware",
    "subcategory": "Fastening",
    "stock": 200,
    "description": "Durable cable ties for organizing and securing cables and wires.",
    "photo": "https://www.hookandloop.com/media/catalog/product/b/l/black_cable_ties_4_1_1.jpg",
    "price": 0.10,
    "details": {
      
      "PowerSupply": "Manual",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Nylon",
      "ItemWeight": "0.01 oz.",
      "ItemDimensions": "6 x 0.25 x 0.25 inches"
    }
  },
  {
    "name": "Interior Latex Paint",
    "brand": "Sherwin-Williams",
    "category": "Hardware",
    "subcategory": "Painting Supplies",
    "stock": 50,
    "description": "High-quality interior latex paint available in a variety of colors and finishes.",
    "photo": "https://http2.mlstatic.com/D_NQ_NP_604877-MLC51802365080_102022-O.webp",
    "price": 40,
    "details": {
      
      "PowerSupply": "N/A",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Water-based latex",
      "ItemWeight": "1 gallon",
      "ItemDimensions": "12 x 12 x 6 inches"
    }
  },
  {
    "name": "Paint Roller",
    "brand": "3M",
    "category": "Hardware",
    "subcategory": "Painting Supplies",
    "stock": 80,
    "description": "Durable and high-performance paint rollers for uniform paint application on surfaces.",
    "photo": "https://reflexfolie.cstatic.io/media/image/19/5d/60/Handroller-min_27157_600x600.jpg",
    "price": 13,
    "details": {
      
      "PowerSupply": "Manual",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Foam or fabric",
      "ItemWeight": "0.5 lbs.",
      "ItemDimensions": "9 x 4 x 2 inches"
    }
  },
  {
    "name": "Angled Paint Brush",
    "brand": "Purdy",
    "category": "Hardware",
    "subcategory": "Painting Supplies",
    "stock": 70,
    "description": "High-quality angled paint brushes for precise detailing and fine painting applications.",
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRItg1oNUl63NklKO27TLp6qa7tLuujlrFp_z7Q1kJKgKP45kQ2hKO1rl67mV5TH-8j6Ic&usqp=CAU",
    "price": 17,
    "details": {
      
      "PowerSupply": "Manual",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Bristles: Natural or synthetic; Handle: Wood or plastic",
      "ItemWeight": "0.25 lbs.",
      "ItemDimensions": "9 x 4 x 2 inches"
    }
  },
  {
    "name": "Paint Tray",
    "brand": "Wooster",
    "category": "Hardware",
    "subcategory": "Painting Supplies",
    "stock": 60,
    "description": "Durable paint trays with compartments for easy paint distribution and clean-up.",
    "photo": "https://images.thdstatic.com/productImages/a917e160-8b03-4f53-b436-ea3341deb899/svn/green-plastic-wooster-paint-trays-0br4130210-64_1000.jpg",
    "price": 5,
    "details": {
      
      "PowerSupply": "N/A",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Plastic",
      "ItemWeight": "0.5 lbs.",
      "ItemDimensions": "12 x 6 x 3 inches"
    }
  },
  {
    "name": "Painter's Tape",
    "brand": "FrogTape",
    "category": "Hardware",
    "subcategory": "Painting Supplies",
    "stock": 100,
    "description": "High-quality painter's tape for precise masking and clean paint lines.",
    "photo": "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dwf7d93ab5/images/large/641732_1000_1_-frogtape-delicate-surface-masking-tape-24mm-x-41-1m.jpg?sw=680&q=85",
    "price": 7,
    "details": {
      
      "PowerSupply": "N/A",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Crepe paper with adhesive backing",
      "ItemWeight": "0.1 lbs",
      "ItemDimensions": "60 yds. x 1.88 inches"
    }
  },
  {
    "name": "Spray Paint",
    "brand": "Rust-Oleum",
    "category": "Hardware",
    "subcategory": "Painting Supplies",
    "stock": 90,
    "description": "Fast-drying and durable spray paint for various DIY and home improvement projects.",
    "photo": "https://cdn.mscdirect.com/global/images/ProductImages/5895677-21.jpg",
    "price": 5,
    "details": {
      
      "PowerSupply": "Manual",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Aerosol paint",
      "ItemWeight": "1 lb.",
      "ItemDimensions": "12 x 6 x 4 inches"
    }
  },
  {
    "name": "Paint Can Opener",
    "brand": "Shur-Line",
    "category": "Hardware",
    "subcategory": "Painting Supplies",
    "stock": 120,
    "description": "Convenient paint can opener tool for easy access to paint cans.",
    "photo": "https://cdn.paintsupply.com/wp-content/uploads/2016/06/022384060203.jpg",
    "price": 3,
    "details": {
      
      "PowerSupply": "Manual",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Metal",
      "ItemWeight": "0.1 lb.",
      "ItemDimensions": "6 x 4 x 2 inches"
    }
  },
  {
    "name": "THHN Electrical Cable",
    "brand": "Southwire",
    "category": "Hardware",
    "subcategory": "Electrical Supplies",
    "stock": 200,
    "description": "High-quality copper THHN electrical cable for residential and commercial electrical installations.",
    "photo": "https://images.thdstatic.com/productImages/4b7c024d-a237-467e-b5ac-5fcb4082fafe/svn/southwire-thhn-wires-11587305-64_1000.jpg",
    "price": 1,
    "details": {
      
      "PowerSupply": "N/A",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Copper conductor with insulation",
      "ItemWeight": "0.5 lbs. per 100 ft.",
      "ItemDimensions": "100 ft. x 12 AWG"
    }
  },
  {
    "name": "Light Switch",
    "brand": "Leviton",
    "category": "Hardware",
    "subcategory": "Electrical Supplies",
    "stock": 120,
    "description": "Elegant and reliable light switches for controlling lighting in homes and businesses.",
    "photo": "https://www.homecontrols.com/homecontrols/images-sca/LVD215S1BW_media-001.jpg?resizeid=18&resizeh=400&resizew=400",
    "price": 7,
    "details": {
      "Item name": "Leviton Light Switch",
      "PowerSupply": "Electric",
      "Speeds": "1",
      "Voltage": "120V",
      "Amperage": "15A",
      "Material": "Plastic and metal",
      "ItemWeight": "0.1 lb.",
      "ItemDimensions": "4 x 2 x 1 inches"
    }
  },
  {
    "name": "Electrical Outlet",
    "brand": "Eaton",
    "category": "Hardware",
    "subcategory": "Electrical Supplies",
    "stock": 150,
    "description": "Durable and safe electrical outlets for connecting devices in electrical installations.",
    "photo": "https://mobileimages.lowes.com/productimages/f01b6ad4-ec41-4acf-939d-55d4d8da7163/12477300.jpg",
    "price": 5,
    "details": {
      
      "PowerSupply": "Electric",
      "Speeds": "1",
      "Voltage": "120V",
      "Amperage": "15A",
      "Material": "Plastic and metal",
      "ItemWeight": "0.25 lbs.",
      "ItemDimensions": "4 x 2 x 1 inches"
    }
  },
  {
    "name": "Electrical Wire Connectors",
    "brand": "Gardner Bender",
    "category": "Hardware",
    "subcategory": "Electrical Supplies",
    "stock": 90,
    "description": "Reliable electrical wire connectors for secure and efficient electrical connections.",
    "photo": "https://m.media-amazon.com/images/I/610NTuHKecL._AC_UF894,1000_QL80_.jpg",
    "price": 0.03,
    "details": {
  
      "PowerSupply": "Electric",
      "Speeds": "1",
      "Voltage": "120V",
      "Amperage": "15A",
      "Material": "Plastic and metal",
      "ItemWeight": "0.1 lb.",
      "ItemDimensions": "1 x 0.5 x 0.5 inches"
    }
  },
  {
    "name": "Circuit Breaker",
    "brand": "Siemens",
    "category": "Hardware",
    "subcategory": "Electrical Supplies",
    "stock": 75,
    "description": "High-quality circuit breakers for protecting electrical circuits from overloads and faults.",
    "photo": "https://media.distrelec.com/Web/WebShopImages/landscape_large/4-/01/Siemens-5SL4306-6-30137424-01.jpg",
    "price": 6,
    "details": {
      
      "PowerSupply": "Electric",
      "Speeds": "1",
      "Voltage": "120V",
      "Amperage": "15A",
      "Material": "Plastic and metal",
      "ItemWeight": "0.25 lbs.",
      "ItemDimensions": "4 x 2 x 1 inches"
    }
  },
  {
    "name": "Electrical Tape",
    "brand": "3M",
    "category": "Hardware",
    "subcategory": "Electrical Supplies",
    "stock": 100,
    "description": "Insulating and sealing electrical tape for various electrical applications.",
    "photo": "https://m.media-amazon.com/images/I/71hqKpykYEL._AC_UF894,1000_QL80_.jpg",
    "price": 7,
    "details": {
      
      "PowerSupply": "N/A",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Vinyl",
      "ItemWeight": "0.1 lb.",
      "ItemDimensions": "60 yds. x 0.75 inches"
    }
  },
  {
    "name": "Wire Strippers",
    "brand": "Klein Tools",
    "category": "Hardware",
    "subcategory": "Electrical Supplies",
    "stock": 70,
    "description": "High-quality wire strippers for removing insulation from electrical wires.",
    "photo": "https://m.media-amazon.com/images/I/5180XMjuiIL._AC_UF894,1000_QL80_.jpg",
    "price": 13,
    "details": {
      
      "PowerSupply": "Manual",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Steel and plastic",
      "ItemWeight": "0.5 lbs.",
      "ItemDimensions": "6 x 4 x 2 inches"
    }
  },
  {
    "name": "Stainless Steel Phillips Screw",
    "brand": "DEWALT",
    "category": "Hardware",
    "subcategory": "Fastening",
    "stock": 70,
    "description": "Corrosion-resistant stainless steel Phillips screws for various fastening applications.",
    "photo": "https://cdn11.bigcommerce.com/s-gdy1ehz/images/stencil/1280x1280/products/281903/391978/CreteFlexPhillipsTrimfitHead__10033.1605348267.png?c=2",
    "price": 0.05,
    "details": {
      
      "PowerSupply": "Manual or electric",
      "Speeds": "1",
      "Voltage": "N/A (if electric)",
      "Amperage": "N/A (if electric)",
      "Material": "Stainless steel",
      "ItemWeight": "0.01 oz.",
      "ItemDimensions": "1 x 0.25 x 0.25 inches"
    }
  },
  {
    "name": "Steel Hex Bolt",
    "brand": "IRWIN",
    "category": "Hardware",
    "subcategory": "Fastening",
    "stock": 60,
    "description": "High-strength steel hex bolts for securing structures and equipment.",
    "photo": "https://www.grfasteners.com/image.php?filename=WebCat-000d000e0005.jpg&width=1000&height=1000",
    "price": 0.06,
    "details": {
      
      "PowerSupply": "Manual",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Steel",
      "ItemWeight": "0.02 oz.",
      "ItemDimensions": "1 x 0.25 x 0.25 inches"
    }
  },
  {
    "name": "Fine Grit Sandpaper",
    "brand": "Norton",
    "category": "Hardware",
    "subcategory": "Painting Supplies",
    "stock": 45,
    "description": "Fine grit sandpaper for smooth surface preparation before painting.",
    "photo": "https://www.thesandpaperman.com.au/images/D/230%20x%20280%20mm%20x%2080%20grit%20Norton%20A275%20No-Fil%20Sandpaper%20Sheet%20d-02.jpg",
    "price": 0.07,
    "details": {
      
      "PowerSupply": "Manual",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Sandpaper",
      "ItemWeight": "0.1 oz.",
      "ItemDimensions": "9 x 4 x 1 inches"
    }
  },
  {
    "name": "Textured Paint Roller",
    "brand": "Purdy",
    "category": "Hardware",
    "subcategory": "Painting Supplies",
    "stock": 35,
    "description": "Textured paint roller for creating decorative and textured wall finishes.",
    "photo": "https://i.ebayimg.com/images/g/k-QAAOSwSBlkXTpX/s-l1200.webp",
    "price": 11,
    "details": {
      
      "PowerSupply": "Manual",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Foam or fabric",
      "ItemWeight": "0.5 lbs.",
      "ItemDimensions": "9 x 4 x 2 inches"
    }
  },
  {
    "name": "NM-B Electrical Cable",
    "brand": "Coleman Cable",
    "category": "Hardware",
    "subcategory": "Electrical Supplies",
    "stock": 85,
    "description": "Non-metallic sheathed NM-B electrical cable for residential wiring.",
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzNP6zQHTHXuA8x1wx5U5_vd_sGlCc8J0k__L08lP1Ah3WtGkeAGPjNICoUCK32Fo0XpI&usqp=CAU",
    "price": 0.9,
    "details": {
      
      "PowerSupply": "N/A",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Copper conductor with insulation",
      "ItemWeight": "0.5 lbs. per 100 ft.",
      "ItemDimensions": "100 ft. x 12 AWG"
    }
  },
  {
    "name": "Electrical Switch Box",
    "brand": "Carlon",
    "category": "Hardware",
    "subcategory": "Electrical Supplies",
    "stock": 55,
    "description": "Sturdy electrical switch box for mounting electrical switches and outlets.",
    "photo": "https://i5.walmartimages.com/asr/af0c40a7-d562-466a-b165-75d8dc363401.697d725b5e70ff17c2b8445fb2cab3d8.jpeg", 
    "price": 8,
    "details": {
      
      "PowerSupply": "N/A",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Plastic or metal",
      "ItemWeight": "0.1 lbs.",
      "ItemDimensions": "4 x 4 x 2 inches"
    }
  },
  {
    "name": "Steel Hex Nut",
    "brand": "Kreg",
    "category": "Hardware",
    "subcategory": "Fastening",
    "stock": 80,
    "description": "High-strength steel hex nuts for securely fastening bolts and screws.",
    "photo": "https://www.rockler.com/media/catalog/product/cache/5c5edcf249a74e99ece620285918bb9b/4/4/44747-01-1000.jpg",
    "price": 0.09,
    "details": {
      
      "PowerSupply": "Manual",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Steel",
      "ItemWeight": "0.01 oz.",
      "ItemDimensions": "1/2 x 1/4 x 1/4 inches"
    }
  },
  {
    "name": "Flat Head Screw",
    "brand": "RYOBI",
    "category": "Hardware",
    "subcategory": "Fastening",
    "stock": 90,
    "description": "Flat head screws for flush and concealed fastening in woodworking projects.",
    "photo": "https://cdn11.bigcommerce.com/s-y2yz6f/images/stencil/1280x1280/products/1563670/1737126/ryobiridgid410101713screwflathd832uncx8mmoriginaloempart__58075.1691749480.jpg?c=2",
    "price": 0.06,
    "details": {
      
      "PowerSupply": "Manual or electric",
      "Speeds": "1",
      "Voltage": "N/A (if electric)",
      "Amperage": "N/A (if electric)",
      "Material": "Steel",
      "ItemWeight": "0.01 oz.",
      "ItemDimensions": "1 x 1/4 x 1/4 inches"
    }
  },
  {
    "name": "High-Temperature Spray Paint",
    "brand": "Rust-Oleum",
    "category": "Hardware",
    "subcategory": "Painting Supplies",
    "stock": 70,
    "description": "Durable high-temperature spray paint for automotive and heat-resistant applications.",
    "photo": "https://m.media-amazon.com/images/I/71OusWTlPfL._AC_UF1000,1000_QL80_.jpg", 
    "price": 13,
    "details": {
      
      "PowerSupply": "Manual",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Aerosol paint",
      "ItemWeight": "1 lb.",
      "ItemDimensions": "12 x 6 x 4 inches"
    }
  },
  {
    "name": "Paint Mixing Bucket",
    "brand": "HomeRight",
    "category": "Hardware",
    "subcategory": "Painting Supplies",
    "stock": 50,
    "description": "Sturdy paint mixing bucket with convenient measurement markings for accurate mixing.",
    "photo": "https://m.media-amazon.com/images/I/611iSEN3LRS._AC_UF894,1000_QL80_.jpg",
    "price": 7,
    "details": {
      
      "PowerSupply": "Manual",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Plastic",
      "ItemWeight": "1 lb.",
      "ItemDimensions": "12 x 6 x 6 inches"
    }
  },
  {
    "name": "Multiple Outlet Power Strip",
    "brand": "Belkin",
    "category": "Hardware",
    "subcategory": "Electrical Supplies",
    "stock": 65,
    "description": "Versatile power strip with multiple outlets for home and office use.",
    "photo": "https://content.syndigo.com/asset/de8c4379-c5c2-457c-bbd8-8221879e203b/960.png",
    "price": 13,
    "details": {
      
      "PowerSupply": "Electric",
      "Speeds": "1",
      "Voltage": "120V",
      "Amperage": "15A",
      "Material": "Plastic and metal",
      "ItemWeight": "0.5 lbs.",
      "ItemDimensions": "12 x 6 x 2 inches"
    }
  },
  {
    "name": "Heavy-Duty Extension Cord",
    "brand": "GoGreen Power",
    "category": "Hardware",
    "subcategory": "Electrical Supplies",
    "stock": 55,
    "description": "Heavy-duty electrical extension cord with durable construction for outdoor use.",
    "photo": "https://images.thdstatic.com/productImages/2e516d15-488e-4e58-9b0d-1c09ecb68afa/svn/green-gogreen-power-general-purpose-cords-gg-13718gn-64_1000.jpg",
    "price": 17,
    "details": {
      
      "PowerSupply": "Electric",
      "Speeds": "1",
      "Voltage": "120V",
      "Amperage": "15A",
      "Material": "Plastic and copper",
      "ItemWeight": "1 lb.",
      "ItemDimensions": "25 ft. x 12 AWG"
    }
  },
  {
    "name": "Lawn Mower",
    "brand": "Honda",
    "category": "Home and Garden",
    "subcategory": "Cutting and Pruning",
    "stock": 10,
    "description": "High-performance lawn mower for maintaining a well-trimmed lawn.",
    "photo": "https://www.sam-turner.co.uk/cdn/shop/products/11251542-1264657473218682_1_1024x1024@2x.jpg?v=1632390673",
    "price": 999,
    "details": {
     
      "PowerSupply": "Gasoline",
      "Speeds": "1-2",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Steel and plastic",
      "ItemWeight": "20-50 lbs.",
      "ItemDimensions": "36 x 24 x 12 inches"
    }
  },
  {
    "name": "Hedge Trimmer",
    "brand": "STIHL",
    "category": "Home and Garden",
    "subcategory": "Cutting and Pruning",
    "stock": 12,
    "description": "Powerful hedge trimmer for shaping and maintaining hedges and shrubs.",
    "photo": "https://shop.stihl.co.uk/cdn/shop/products/HSA66_Hero_2048x.jpg?v=1562236723",
    "price": 350,
    "details": {
      
      "PowerSupply": "Gasoline or electric",
      "Speeds": "1-2",
      "Voltage": "120V (if electric)",
      "Amperage": "10A (if electric)",
      "Material": "Steel and plastic",
      "ItemWeight": "5-10 lbs.",
      "ItemDimensions": "24 x 12 x 6 inches"
    }
  },
  {
    "name": "Chainsaw",
    "brand": "Husqvarna",
    "category": "Home and Garden",
    "subcategory": "Cutting and Pruning",
    "stock": 8,
    "description": "Professional-grade chainsaw for cutting trees and logs with ease.",
    "photo": "https://i0.wp.com/www.cgeltd.ie/wp-content/uploads/2022/09/img_6327.png?fit=800%2C800&ssl=1",
    "price": 699,
    "details": {
      
      "PowerSupply": "Gasoline",
      "Speeds": "1-2",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Steel and plastic",
      "ItemWeight": "10-20 lbs.",
      "ItemDimensions": "24 x 12 x 6 inches"
    }
  },
  {
    "name": "Grass Trimmer",
    "brand": "Black & Decker",
    "category": "Home and Garden",
    "subcategory": "Cutting and Pruning",
    "stock": 18,
    "description": "Versatile grass trimmer for trimming and edging your lawn with ease.",
    "photo": "https://www.blackanddecker.com/cdn/shop/products/BESTE620_2_Primary.jpg?v=1663095877s",
    "price": 180,
    "details": {
      
      "PowerSupply": "Electric or cordless",
      "Speeds": "1-2",
      "Voltage": "120V (if electric)",
      "Amperage": "10A (if electric)",
      "Material": "Steel and plastic",
      "ItemWeight": "5-10 lbs.",
      "ItemDimensions": "36 x 12 x 6 inches"
    }
  },
  {
    "name": "Tree Pruner",
    "brand": "Corona",
    "category": "Home and Garden",
    "subcategory": "Cutting and Pruning",
    "stock": 9,
    "description": "Long-reach tree pruner for cutting high branches without a ladder.",
    "photo": "https://www.forestry-suppliers.com/Images/Original/3755_81155_p1.jpg",
    "price": 76,
    "details": {
     
      "PowerSupply": "Manual",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Steel and plastic",
      "ItemWeight": "1-2 lbs.",
      "ItemDimensions": "24 x 6 x 2 inches"
    }
  },
  {
    "name": "Garden Hose",
    "brand": "Flexzilla",
    "category": "Home and Garden",
    "subcategory": "Irrigation and Pool",
    "stock": 20,
    "description": "Flexible and kink-resistant garden hose for watering plants and garden beds.",
    "photo": "https://m.media-amazon.com/images/I/51yFwAuB+hL.jpg",
    "price": 50,
    "details": {
      
      "PowerSupply": "Water",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Hybrid polymer",
      "ItemWeight": "1-2 lbs. per 25 feet",
      "ItemDimensions": "25 ft. x 5/8 inches"
    }
  },
  {
    "name": "Sprinkler System",
    "brand": "Rain Bird",
    "category": "Home and Garden",
    "subcategory": "Irrigation and Pool",
    "stock": 10,
    "description": "Automatic sprinkler system for efficient lawn and garden watering.",
    "photo": "https://acdn.mitiendanube.com/stores/198/737/products/aspersor-81441-0bae53f72eea73798b16402959917143-640-0.png",
    "price": 1300,
    "details": {
      
      "PowerSupply": "Water",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Plastic",
      "ItemWeight": "10-20 lbs.",
      "ItemDimensions": "24 x 12 x 6 inches"
    }
  },
  {
    "name": "Pool Cleaner",
    "brand": "Polaris",
    "category": "Home and Garden",
    "subcategory": "Irrigation and Pool",
    "stock": 8,
    "description": "Robotic pool cleaner for keeping your swimming pool crystal clear.",
    "photo": "https://www.pentair.com/content/dam/extranet/nam/pentair-pool/residential/cleaners/kreepy-krauly/kreepy-krauly-sand-shark/images/kreepy-krauly-sand-shark.png.thumb.1280.1280.jpg",
    "price": 100,
    "details": {
      
      "PowerSupply": "Electric",
      "Speeds": "1-2",
      "Voltage": "120V",
      "Amperage": "10A",
      "Material": "Plastic",
      "ItemWeight": "10-20 lbs.",
      "ItemDimensions": "24 x 12 x 6 inches"
    }
  },
  {
    "name": "Watering Can",
    "brand": "Gardman",
    "category": "Home and Garden",
    "subcategory": "Irrigation and Pool",
    "stock": 15,
    "description": "Traditional watering can for gentle and precise watering of plants.",
    "photo": "https://images.thdstatic.com/productImages/2992f796-f00d-457e-b775-c5b92ee8ba10/svn/gardman-watering-cans-r34898x-64_600.jpg",
    "price": 20,
    "details": {
      
      "PowerSupply": "Manual",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Plastic or metal",
      "ItemWeight": "1-2 lbs.",
      "ItemDimensions": "12 x 6 x 6 inches"
    }
  },
  {
    "name": "Drip Irrigation Kit",
    "brand": "Orbit",
    "category": "Home and Garden",
    "subcategory": "Irrigation and Pool",
    "stock": 12,
    "description": "Complete drip irrigation kit for efficient and water-saving plant watering.",
    "photo": "https://m.media-amazon.com/images/I/61QH1CBaW0L._AC_UF894,1000_QL80_.jpg",
    "price": 33,
    "details": {
      
      "PowerSupply": "Water",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Plastic",
      "ItemWeight": "1-2 lbs.",
      "ItemDimensions": "12 x 6 x 6 inches"
    }
  },
  {
    "name": "Pool Cover",
    "brand": "Intex",
    "category": "Home and Garden",
    "subcategory": "Irrigation and Pool",
    "stock": 9,
    "description": "Durable pool cover to protect your swimming pool from debris and leaves.",
    "photo": "https://media.diy.com/is/image/Kingfisher/bestway-circular-swimming-pool-cover-l-3-05m-x-w-3-05m~6942138951639_01c_bq?$MOB_PREV$&$width=618&$height=618",
    "price": 23,
    "details": {
      
      "PowerSupply": "N/A",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Vinyl",
      "ItemWeight": "1-2 lbs.",
      "ItemDimensions": "12 x 6 x 6 inches"
    }
  },
  {
    "name": "Pressure Washer",
    "brand": "Kärcher",
    "category": "Home and Garden",
    "subcategory": "Maintenance",
    "stock": 10,
    "description": "High-pressure washer for cleaning driveways, decks, and vehicles with ease.",
    "photo": "https://cdn.media.halfords.com/i/washford/465846/Karcher-K4-Power-Control-Pressure-Washer.webp?fmt=auto&qlt=default&$sfcc_tile$&w=680",
    "price": 350,
    "details": {
      
      "PowerSupply": "Electric",
      "Speeds": "1-2",
      "Voltage": "120V",
      "Amperage": "10A",
      "Material": "Plastic and metal",
      "ItemWeight": "10-20 lbs.",
      "ItemDimensions": "24 x 12 x 6 inches"
    }
  },
  {
    "name": "Leaf Blower",
    "brand": "Makita",
    "category": "Home and Garden",
    "subcategory": "Maintenance",
    "stock": 12,
    "description": "Powerful leaf blower for clearing leaves and debris from your yard.",
    "photo": "https://www.zoro.com/static/cms/product/full/Z3o87-kcpEx_.JPG",
    "price": 200,
    "details": {
      
      "PowerSupply": "Electric or cordless",
      "Speeds": "1-2",
      "Voltage": "120V (if electric)",
      "Amperage": "10A (if electric)",
      "Material": "Plastic and metal",
      "ItemWeight": "5-10 lbs.",
      "ItemDimensions": "36 x 12 x 6 inches"
    }
  },
  {
    "name": "Lawn Aerator",
    "brand": "Agri-Fab",
    "category": "Home and Garden",
    "subcategory": "Maintenance",
    "stock": 8,
    "description": "Effective lawn aerator for improving soil aeration and grass health.",
    "photo": "https://images.thdstatic.com/productImages/ea3ed61a-a0b6-4bba-ad9a-dea34532b2bf/svn/agri-fab-spike-aerators-45-0544-64_1000.jpg",
    "price": 270,
    "details": {
      
      "PowerSupply": "Manual or electric",
      "Speeds": "1-2",
      "Voltage": "120V (if electric)",
      "Amperage": "10A (if electric)",
      "Material": "Steel and plastic",
      "ItemWeight": "20-50 lbs.",
      "ItemDimensions": "36 x 24 x 12 inches"
    }
  },
  {
    "name": "Wheelbarrow",
    "brand": "True Temper",
    "category": "Home and Garden",
    "subcategory": "Maintenance",
    "stock": 15,
    "description": "Sturdy wheelbarrow for transporting soil, mulch, and other materials in your garden.",
    "photo": "https://i.ebayimg.com/images/g/VtsAAOSw1G9kx7g-/s-l1200.webp",
    "price": 130,
    "details": {
      
      "PowerSupply": "Manual",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Steel and plastic",
      "ItemWeight": "20-50 lbs.",
      "ItemDimensions": "36 x 24 x 12 inches"
    }
  },
  {
    "name": "Garden Cart",
    "brand": "Gorilla Carts",
    "category": "Home and Garden",
    "subcategory": "Maintenance",
    "stock": 18,
    "description": "Versatile garden cart for hauling heavy loads and gardening supplies.",
    "photo": "https://images.thdstatic.com/productImages/30b0f90e-44b8-465c-a277-fe6e92d0dce2/svn/gorilla-carts-garden-carts-gcg-4-76_600.jpg",
    "price": 200,
    "details": {
      
      "PowerSupply": "Manual",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Steel and plastic",
      "ItemWeight": "20-50 lbs.",
      "ItemDimensions": "36 x 24 x 12 inches"
    }
  },
  {
    "name": "Weed Trimmer",
    "brand": "WORX",
    "category": "Home and Garden",
    "subcategory": "Maintenance",
    "stock": 9,
    "description": "Cordless weed trimmer for edging and trimming grass and weeds in your yard.",
    "photo": "https://cdn.rona.ca/images/32515129_L.jpg",
    "price": 130,
    "details": {
    
      "PowerSupply": "Electric or cordless",
      "Speeds": "1-2",
      "Voltage": "120V (if electric)",
      "Amperage": "10A (if electric)",
      "Material": "Steel and plastic",
      "ItemWeight": "5-10 lbs.",
      "ItemDimensions": "36 x 12 x 6 inches"
    }
  },
  {
    "name": "Electric Chainsaw",
    "brand": "Black & Decker",
    "category": "Home and Garden",
    "subcategory": "Cutting and Pruning",
    "stock": 10,
    "description": "Corded electric chainsaw for cutting branches and logs in your garden.",
    "photo": "https://i5.walmartimages.com/seo/BLACK-DECKER-CS1216-12Amp-16-Corded-Chainsaw_6d8a3fae-b330-44c9-bc8f-f15c378e391c.d560143bd6a355f4b6f08e435bfe8838.jpeg",
    "price": 200,
    "details": {
      
      "PowerSupply": "Electric",
      "Speeds": "1-2",
      "Voltage": "120V",
      "Amperage": "10A",
      "Material": "Steel and plastic",
      "ItemWeight": "5-10 lbs.",
      "ItemDimensions": "24 x 12 x 6 inches"
    }
  },
  {
    "name": "Pole Saw",
    "brand": "Remington",
    "category": "Home and Garden",
    "subcategory": "Cutting and Pruning",
    "stock": 12,
    "description": "Telescoping pole saw for reaching and trimming high branches.",
    "photo": "https://mobileimages.lowes.com/productimages/fa8d6031-68b7-4e91-8c71-83c207dbb45a/00824253.jpg",
    "price": 200,
    "details": {
      
      "PowerSupply": "Gas or electric",
      "Speeds": "1-2",
      "Voltage": "120V (if electric)",
      "Amperage": "10A (if electric)",
      "Material": "Steel and plastic",
      "ItemWeight": "5-10 lbs.",
      "ItemDimensions": "36 x 12 x 6 inches"
    }
  },
  {
    "name": "Hedge Shears",
    "brand": "Fiskars",
    "category": "Home and Garden",
    "subcategory": "Cutting and Pruning",
    "stock": 15,
    "description": "Sharp and ergonomic hedge shears for precise hedge trimming.",
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThU-dq0b0R3Tu963j5eD971THer6WK0U3jZl6q6uKAVznqazjcRHQpfzoZN6dDC5nDlL0&usqp=CAU",
    "price": 30,
    "details": {
      
      "PowerSupply": "Manual",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Steel and plastic",
      "ItemWeight": "1-2 lbs.",
      "ItemDimensions": "24 x 12 x 6 inches"
    }
  },
  {
    "name": "Grass Shears",
    "brand": "Gardena",
    "category": "Home and Garden",
    "subcategory": "Cutting and Pruning",
    "stock": 20,
    "description": "Grass shears with adjustable handles for effortless grass cutting.",
    "photo": "https://www.wgmltd.co.uk/res/8735-30.jpg",
    "price": 20,
    "details": {
      
      "PowerSupply": "Manual",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Steel and plastic",
      "ItemWeight": "1-2 lbs.",
      "ItemDimensions": "12 x 6 x 6 inches"
    }
  },
  {
    "name": "Tree Lopper",
    "brand": "Corona",
    "category": "Home and Garden",
    "subcategory": "Cutting and Pruning",
    "stock": 8,
    "description": "Long-handled tree lopper for trimming high branches and limbs.",
    "photo": "https://m.media-amazon.com/images/I/71RmxUQJ93L.jpg",
    "price": 30,
    "details": {
     
      "PowerSupply": "Manual",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Steel and plastic",
      "ItemWeight": "1-2 lbs.",
      "ItemDimensions": "24 x 12 x 6 inches"
    }
  },
  {
    "name": "Garden Sprayer",
    "brand": "Chapin",
    "category": "Home and Garden",
    "subcategory": "Irrigation and Pool",
    "stock": 10,
    "description": "Pressure garden sprayer for applying fertilizers and pesticides.",
    "photo": "https://i5.walmartimages.com/seo/Chapin-Mfg-Sprayer-Home-Garden-1-Gallon-16100_8c985427-272f-427e-8149-cbf4a7ce1a74.d5ee4f2546d2a3690d6f2a63e363ccd1.png",
    "price": 23,
    "details": {
      
      "PowerSupply": "Manual or electric",
      "Speeds": "1-2",
      "Voltage": "120V (if electric)",
      "Amperage": "10A (if electric)",
      "Material": "Plastic",
      "ItemWeight": "1-2 lbs.",
      "ItemDimensions": "12 x 6 x 6 inches"
    }
  },
  {
    "name": "Automatic Pool Chlorinator",
    "brand": "Hayward",
    "category": "Home and Garden",
    "subcategory": "Irrigation and Pool",
    "stock": 12,
    "description": "Automatic pool chlorinator for maintaining pool water cleanliness.",
    "photo": "https://images.inyopools.com/cloud/images/hayward-cl2002s-03.jpeg?format=jpg&scale=both&anchor=middlecenter&autorotate=true&mode=pad&width=650&height=650",
    "price": 300,
    "details": {
      
      "PowerSupply": "Electric",
      "Speeds": "1-2",
      "Voltage": "120V",
      "Amperage": "10A",
      "Material": "Plastic",
      "ItemWeight": "10-20 lbs.",
      "ItemDimensions": "24 x 12 x 6 inches"
    }
  },
  {
    "name": "Soaker Hose",
    "brand": "Gilmour",
    "category": "Home and Garden",
    "subcategory": "Irrigation and Pool",
    "stock": 15,
    "description": "Porous soaker hose for efficient and deep root watering.",
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO_EKapef8-gdhG2HjPit1f1sgtDdH7ftuCzyFlxpAwuKZi4_YmIVWMpKfAcolAo4lAkk&usqp=CAU",
    "price": 22,
    "details": {
      
      "PowerSupply": "Water",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Rubber",
      "ItemWeight": "1-2 lbs. per 25 feet",
      "ItemDimensions": "25 ft. x 5/8 inches"
    }
  },
  {
    "name": "Pool Skimmer Net",
    "brand": "Pentair",
    "category": "Home and Garden",
    "subcategory": "Irrigation and Pool",
    "stock": 20,
    "description": "Pool skimmer net for removing debris and leaves from the pool surface.",
    "photo": "https://m.media-amazon.com/images/I/71Fk2f0ny0L._AC_UF894,1000_QL80_.jpg",
    "price": 18,
    "details": {
      
      "PowerSupply": "Manual",
      "Speeds": "1",
      "Voltage": "N/A",
      "Amperage": "N/A",
      "Material": "Plastic and mesh",
      "ItemWeight": "1-2 lbs.",
      "ItemDimensions": "12 x 6 x 6 inches"
    }
  },
  {
    "name": "Water Timer",
    "brand": "Orbit",
    "category": "Home and Garden",
    "subcategory": "Irrigation and Pool",
    "stock": 8,
    "description": "Programmable water timer for automated garden watering.",
    "photo": "https://sp.menardc.com/main/items/media/ORBIT001/ProductXLarge/62056.jpg",
    "price": 33,
    "details": {
      
      "PowerSupply": "Battery or electric",
      "Speeds": "1-2",
      "Voltage": "120V (if electric)",
      "Amperage": "10A (if electric)",
      "Material": "Plastic",
      "ItemWeight": "1 lb.",
      "ItemDimensions": "4 x 2 x 1 inches"
    }
  },
  //--------------------nuevos
  {
    "name": "Cordless Drill",
    "brand": "Festool",
    "category": "Power Tools",
    "subcategory": "Drilling",
    "stock": 30,
    "description":
    "The Festool cordless drill is a high-quality and versatile tool designed for professionals and DIY enthusiasts. Its ergonomic design and powerful motor make it ideal for drilling holes and driving screws into various materials, including wood, metal, and concrete. Festool is renowned for its precision and durability, ensuring that this drill will deliver consistent performance for a wide range of projects. The long-lasting lithium-ion battery provides reliable cordless operation, allowing users to work without limitations. Whether you're constructing intricate furniture or handling demanding construction tasks, the Festool cordless drill is the perfect choice.",
    "photo": "https://assets.leevalley.com/Size4/10090/zc576439-festool-c-18-cordless-drill-basic-f-0001.jpg",
    "price": 150,
    "details": {
      
      "PowerSupply": "Battery or electric",
      "Speeds": "1-2",
      "Voltage": "120V (if electric)",
      "Amperage": "10A (if electric)",
      "Material": "Plastic",
      "ItemWeight": "1 lb.",
      "ItemDimensions": "4 x 2 x 1 inches"
    }
  },
  {
    "name": "Circular Saw",
    "brand": "Festool",
    "category": "Power Tools",
    "subcategory": "Cutting",
    "stock": 25,
    "description":
    "The Festool circular saw is a precision cutting tool designed for professional woodworkers and craftsmen. Its powerful motor and sharp blade enable accurate and efficient cuts in various wood materials. The saw features advanced dust extraction technology, keeping the workspace clean and enhancing visibility during cutting tasks. Festool's commitment to quality is evident in this saw's construction, ensuring durability and longevity. Whether you're working on carpentry projects or fine woodworking, the Festool circular saw delivers unmatched performance and reliability.",
    "photo": "https://img.misterworker.com/en-us/46655-thickbox_default/circular-saw-hk-85-eb-plus-1900w.jpg",
    "price": 250,
    "details": {
      
      "PowerSupply": "Battery or electric",
      "Speeds": "1-2",
      "Voltage": "120V (if electric)",
      "Amperage": "10A (if electric)",
      "Material": "Plastic",
      "ItemWeight": "1 lb.",
      "ItemDimensions": "4 x 2 x 1 inches"
    }
  },
  {
    "name": "Random Orbital Sander",
    "brand": "Festool",
    "category": "Power Tools",
    "subcategory": "Sanding",
    "stock": 20,
    "description":
    "The Festool random orbital sander is a high-performance sanding tool suitable for woodworking, metalworking, and automotive applications. Its innovative design ensures a swirl-free finish on various surfaces. With variable speed control and efficient dust extraction, this sander provides smooth operation and a cleaner workspace. Festool's precision engineering guarantees optimal sanding results, making it a top choice for professionals and hobbyists alike.",
    "photo": "https://www.highlandwoodworking.com/images/products/detail/724702d.jpg",
    "price": 180,
    "details": {
      
      "PowerSupply": "Battery or electric",
      "Speeds": "1-2",
      "Voltage": "120V (if electric)",
      "Amperage": "10A (if electric)",
      "Material": "Plastic",
      "ItemWeight": "1 lb.",
      "ItemDimensions": "4 x 2 x 1 inches"
    }
  },
  {
    "name": "Track Saw",
    "brand": "Festool",
    "category": "Power Tools",
    "subcategory": "Cutting",
    "stock": 15,
    "description":
    "The Festool track saw is a versatile and precise cutting tool designed for making straight and accurate cuts in various materials. Its guide rail system ensures stability and eliminates the need for additional measuring and marking. With a powerful motor and a sharp blade, this saw delivers splinter-free cuts in wood, laminate, and other sheet materials. Festool's track saw is a favorite among carpenters and DIY enthusiasts for its ease of use and exceptional results.",
    "photo": "https://m.media-amazon.com/images/I/71HJHVR7JFL._AC_UF894,1000_QL80_.jpg",
    "price": 350,
    "details": {
      
      "PowerSupply": "Battery or electric",
      "Speeds": "1-2",
      "Voltage": "120V (if electric)",
      "Amperage": "10A (if electric)",
      "Material": "Plastic",
      "ItemWeight": "1 lb.",
      "ItemDimensions": "4 x 2 x 1 inches"
    }
  },
  {
    "name": "Router",
    "brand": "Festool",
    "category": "Power Tools",
    "subcategory": "Routing",
    "stock": 18,
    "description":
    "The Festool router is a high-performance woodworking tool suitable for a wide range of routing tasks. Its powerful motor and precision collets allow for clean and accurate cuts, shaping edges, and creating intricate designs. With adjustable speed and depth settings, this router provides versatility for various applications. Festool's attention to detail and ergonomic design make this router a top choice for professionals and woodworking enthusiasts.",
    "photo": "https://www.highlandwoodworking.com/ProductImages/festool/Router/727637-01d.jpg",
    "price": 280,
    "details": {
      
      "PowerSupply": "Battery or electric",
      "Speeds": "1-2",
      "Voltage": "120V (if electric)",
      "Amperage": "10A (if electric)",
      "Material": "Plastic",
      "ItemWeight": "1 lb.",
      "ItemDimensions": "4 x 2 x 1 inches"
    }
  },
  {
    "name": "Dust Extractor",
    "brand": "Festool",
    "category": "Power Tools",
    "subcategory": "Dust Collection",
    "stock": 12,
    "description":
    "The Festool dust extractor is a powerful and efficient dust collection system designed to keep the workspace clean and safe. It features a high suction capacity and HEPA filtration, capturing fine dust particles and ensuring a healthier working environment. With automatic tool activation and adjustable suction control, this extractor is compatible with various power tools, enhancing their performance and extending their lifespan. Festool's dust extractor is a must-have for professionals who prioritize cleanliness and air quality in their workshops.",
    "photo": "https://m.media-amazon.com/images/I/81Em5m2pFkL.jpg",
    "price": 400,
    "details": {
      
      "PowerSupply": "Battery or electric",
      "Speeds": "1-2",
      "Voltage": "120V (if electric)",
      "Amperage": "10A (if electric)",
      "Material": "Plastic",
      "ItemWeight": "1 lb.",
      "ItemDimensions": "4 x 2 x 1 inches"
    }
  },
  {
    "name": "Compound Miter Saw",
    "brand": "Festool",
    "category": "Power Tools",
    "subcategory": "Cutting",
    "stock": 10,
    "description":
    "The Festool compound miter saw is a precision cutting tool designed for angled and beveled cuts in various materials. Its dual bevel capability allows for complex cuts, making it an essential tool for trim work, furniture making, and framing. The saw features a laser guide for accuracy and a dust collection system to maintain a clean workspace. Festool's miter saw combines power and precision, ensuring seamless and professional results for woodworking projects.",
    "photo": "https://m.media-amazon.com/images/I/6124UYl-lbS.jpg",
    "price": 550,
    "details": {
      
      "PowerSupply": "Battery or electric",
      "Speeds": "1-2",
      "Voltage": "120V (if electric)",
      "Amperage": "10A (if electric)",
      "Material": "Plastic",
      "ItemWeight": "1 lb.",
      "ItemDimensions": "4 x 2 x 1 inches"
    }
  },
  {
    "name": "Rotary Hammer Drill",
    "brand": "Festool",
    "category": "Power Tools",
    "subcategory": "Drilling",
    "stock": 8,
    "description":
    "The Festool rotary hammer drill is a heavy-duty drilling and chiseling tool designed for masonry and concrete applications. Its powerful motor and pneumatic hammering action deliver efficient drilling and chiseling performance. The drill features an anti-vibration system for comfortable use and a variable speed trigger for precise control. Festool's rotary hammer drill is ideal for professionals in construction and renovation projects, ensuring fast and accurate drilling in tough materials.",
    "photo": "https://www.kelvinpowertools.com/img/shp/FES-BHC18Li-BASIC1.jpg",
    "price": 650,
    "details": {
      
      "PowerSupply": "Battery or electric",
      "Speeds": "1-2",
      "Voltage": "120V (if electric)",
      "Amperage": "10A (if electric)",
      "Material": "Plastic",
      "ItemWeight": "1 lb.",
      "ItemDimensions": "4 x 2 x 1 inches"
    }
  },
  {
    "name": "Domino Joiner",
    "brand": "Festool",
    "category": "Power Tools",
    "subcategory": "Joinery",
    "stock": 6,
    "description":
    "The Festool Domino joiner is a revolutionary tool for creating strong and precise mortise and tenon joints. It uses specialized tenons and an oscillating cutter to create perfect joints quickly and easily. The joiner features adjustable mortise width and depth, allowing for customization according to project requirements. Festool's Domino joiner is a favorite among cabinetmakers and woodworkers for its speed, accuracy, and versatility in joinery work.",
    "photo": "https://m.media-amazon.com/images/I/61AImhWewIL.jpg",
    "price": 900,
    "details": {
      
      "PowerSupply": "Battery or electric",
      "Speeds": "1-2",
      "Voltage": "120V (if electric)",
      "Amperage": "10A (if electric)",
      "Material": "Plastic",
      "ItemWeight": "1 lb.",
      "ItemDimensions": "4 x 2 x 1 inches"
    }
  },
  {
    "name": "Router Table",
    "brand": "Festool",
    "category": "Power Tools",
    "subcategory": "Routing",
    "stock": 5,
    "description":
    "The Festool router table provides a stable and versatile platform for woodworking tasks that require precision routing. It features a large work surface, adjustable fence, and multiple T-slots for securing workpieces and accessories. The table is compatible with Festool routers and many other router brands, offering flexibility for various applications. Festool's router table is a valuable addition to any woodworking workshop, enhancing accuracy and safety in routing operations.",
    "photo": "https://assets.leevalley.com/Size4/10100/ZTP00112-cms-ge-router-table-f-01-r.jpg",
    "price": 400,
    "details": {
      
      "PowerSupply": "Battery or electric",
      "Speeds": "1-2",
      "Voltage": "120V (if electric)",
      "Amperage": "10A (if electric)",
      "Material": "Plastic",
      "ItemWeight": "1 lb.",
      "ItemDimensions": "4 x 2 x 1 inches"
    }
  }
];

Product.insertMany(products);
