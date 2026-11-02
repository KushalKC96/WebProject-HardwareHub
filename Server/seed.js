import prisma from './src/config/prisma.js';

const hardwareItems = [
  { name: 'Cordless Drill', category: 'Power Tools', description: 'Heavy-duty 20V drill with battery and charger.', price: 189.99, rentalPricePerDay: 25.00, imageUrl: 'https://media.istockphoto.com/id/1300993562/photo/screwdriver-on-white-background-isolated.jpg?s=612x612&w=0&k=20&c=nFnedN8jnH4A1xHsa3UOCDCj_ae0V-f7ZdBJOCUxVRE=' },
  { name: 'Pressure Washer', category: 'Cleaning', description: '3000 PSI gas-powered pressure washer.', price: 499.00, rentalPricePerDay: 55.00, imageUrl: 'https://media.istockphoto.com/id/1782267405/photo/powerful-pressure-washer-using-to-clean-dirty-driveway.jpg?s=612x612&w=0&k=20&c=m5cEigYDNMJOWzhW8WviJKg-ha7dksyX6tliQUFapbs=' },
  { name: 'Circular Saw', category: 'Power Tools', description: 'Professional grade 7-1/4 inch circular saw.', price: 249.50, rentalPricePerDay: 30.00, imageUrl: 'https://media.istockphoto.com/id/470862472/photo/circular-saw.jpg?s=612x612&w=0&k=20&c=EXpVKcIo6y2IuYLJzHZoVk8B0B-BZFX67mFvOmogewI=' },
  { name: 'Lawn Mower', category: 'Gardening', description: 'Self-propelled gas lawn mower.', price: 599.99, rentalPricePerDay: 65.00, imageUrl: 'https://media.istockphoto.com/id/171269002/photo/lawn-mower.jpg?s=612x612&w=0&k=20&c=lm7A2eBlsY6TLlWfhL4zoEUV0qQBvTqponb6EgK0VxU=' },
  { name: 'Paint Sprayer', category: 'Painting', description: 'High-volume airless paint sprayer.', price: 349.00, rentalPricePerDay: 45.00, imageUrl: 'https://media.istockphoto.com/id/2197557145/photo/car-painter-sprays-red-color-paint-to-part-of-vehicle-using-spray-gun-in-workshop-garage.jpg?s=612x612&w=0&k=20&c=ZPe9BM_LK-dFJz1M-3l-jUIyl33LGz4vSLkFSsK622A=' },
  { name: 'Jigsaw', category: 'Power Tools', description: 'Variable speed jigsaw for intricate cuts.', price: 129.99, rentalPricePerDay: 18.00, imageUrl: 'https://media.istockphoto.com/id/501456192/photo/red-electric-fretsaw.jpg?s=612x612&w=0&k=20&c=E3i33lj9knjuTJ8CqAkB6cBjKOGcBfiaKaS2eScUrvo=' },
  { name: 'Leaf Blower', category: 'Gardening', description: 'Powerful gas leaf blower for big yards.', price: 199.00, rentalPricePerDay: 25.00, imageUrl: 'https://media.istockphoto.com/id/603858776/photo/heavy-duty-leaf-blower-in-action.jpg?s=612x612&w=0&k=20&c=babWkmKe5GOL0LLz3PiukfbN9oDXuPhLxdXeyZFuaDc=' },
  { name: 'Wet/Dry Vacuum', category: 'Cleaning', description: '12-gallon shop vacuum for tough messes.', price: 159.00, rentalPricePerDay: 20.00, imageUrl: 'https://media.istockphoto.com/id/2165675011/photo/professional-wet-and-dry-vacuum-cleaner-on-gray-carpet-for-perfect-house-cleaning.jpg?s=612x612&w=0&k=20&c=UwDxgUV6dxDJjHtAPbjquhGUqnzWcvkDlLkYX5jBxlA=' },
  { name: 'Hedge Trimmer', category: 'Gardening', description: 'Electric hedge trimmer for precision shaping.', price: 119.00, rentalPricePerDay: 15.00, imageUrl: 'https://media.istockphoto.com/id/1543476902/photo/gardener-cuts-a-boxwood-with-a-hedge-trimmer.jpg?s=612x612&w=0&k=20&c=9A6mgtnzFocBD6TRauxYjOaZJeZuBIsFgtBT-OIe-9E=' },
  { name: 'Sander', category: 'Power Tools', description: 'Orbital sander for smooth wood finishing.', price: 99.50, rentalPricePerDay: 15.00, imageUrl: 'https://www.idealpowertools.com/cdn/shop/files/ID_OS110_Sheet_Sander.jpg?v=1764160176&width=3250' },
  { name: 'Ladder (Extension)', category: 'Construction', description: '20ft aluminum extension ladder.', price: 299.00, rentalPricePerDay: 35.00, imageUrl: 'https://www.badgerladder.com/wp-content/uploads/magictoolbox_cache/ad391aebc1f9913654f3f7c70f89e9ae/5/9/594/original/1600117298/fiberglass-extension-ladder-5000.jpg' },
  { name: 'Rotary Hammer', category: 'Power Tools', description: 'Heavy-duty rotary hammer for concrete.', price: 349.00, rentalPricePerDay: 45.00, imageUrl: 'https://img.magnific.com/free-photo/use-hammer-drill-drill-wall_93675-132041.jpg?semt=ais_hybrid&w=740&q=80' },
  { name: 'Tile Cutter', category: 'Construction', description: 'Manual tile cutter for ceramics.', price: 189.00, rentalPricePerDay: 25.00, imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/036/528/729/small/closeup-hands-of-laborer-using-cutting-tile-machine-at-construction-site-with-sun-flare-background-photo.jpg' },
  { name: 'Generator', category: 'Power Tools', description: 'Portable 5000W generator for outages.', price: 899.00, rentalPricePerDay: 95.00, imageUrl: 'https://media.istockphoto.com/id/2169545139/photo/portable-electric-generator-running-in-the-cold-winter-energy-genocide-small-business-use.jpg?s=612x612&w=0&k=20&c=iVgHg_Z5FK_0JZik4lZs4zo8gs_U-MSekUHuVaB8pAE=' },
  { name: 'Wheelbarrow', category: 'Gardening', description: 'Heavy-duty steel wheelbarrow.', price: 149.00, rentalPricePerDay: 20.00, imageUrl: 'https://media.istockphoto.com/id/181868600/photo/empty-green-wheelbarrow.jpg?s=612x612&w=0&k=20&c=c-aSHeP1Pf6MRjbXjgFT1wyA0yfFEFwotCzdctrifZo=' },
  { name: 'Heat Gun', category: 'Painting', description: 'Professional heat gun for paint stripping.', price: 79.99, rentalPricePerDay: 12.00, imageUrl: 'https://media.istockphoto.com/id/501456192/photo/red-electric-fretsaw.jpg?s=612x612&w=0&k=20&c=E3i33lj9knjuTJ8CqAkB6cBjKOGcBfiaKaS2eScUrvo=' },
  { name: 'Angle Grinder', category: 'Power Tools', description: '4.5-inch angle grinder for metal.', price: 119.00, rentalPricePerDay: 18.00, imageUrl: 'https://media.istockphoto.com/id/1162346271/photo/cutting-metal-with-disk-grinder-in-workshop-close-up.jpg?s=612x612&w=0&k=20&c=9mzbAf9Wns3SXZn_tP3dQqNdpRBTzBgGI8Z-vSK4jJc=' },
  { name: 'Air Compressor', category: 'Power Tools', description: 'Portable pancake air compressor.', price: 219.00, rentalPricePerDay: 28.00, imageUrl: 'https://media.istockphoto.com/id/671586742/photo/air-compressor-on-isolated-background-with-clipping-path.jpg?s=612x612&w=0&k=20&c=_KBJt-I1NgxTwK8hyJul-tGybiOzzRNS2xO4EGpr5Gk=' },
  { name: 'Chainsaw', category: 'Gardening', description: 'Gas-powered chainsaw for felling trees.', price: 399.00, rentalPricePerDay: 50.00, imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/087/886/808/small/chainsaw-appears-in-a-detailed-power-tool-store-close-up-photo.jpg' },
  { name: 'Demolition Hammer', category: 'Construction', description: 'Powerful jackhammer for concrete demo.', price: 749.00, rentalPricePerDay: 85.00, imageUrl: 'https://media.istockphoto.com/id/517722529/photo/construction-worker-with-perforator.jpg?s=612x612&w=0&k=20&c=kdMbA1CBY3NvqzXDkHkkyKFyre_KpVYIy0UcmahJt-Y=' }
];

async function main() {
    console.log('Seeding database with createMany...');
    await prisma.hardware.deleteMany(); // Clear existing
    await prisma.hardware.createMany({
        data: hardwareItems,
        skipDuplicates: true,
    });
    console.log('Database seeded successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
