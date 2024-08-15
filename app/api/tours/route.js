export async function GET(request) {
    const tours = [
      {
        id: 1,
        title: "Tour en la Playa",
        price: 299,
       
      },
      {
        id: 2,
        title: "Aventura en las Montañas",
        price: 399,
      },
      {
        id: 3,
        title: "Safari en el Desierto",
        price: 499,
      },
      {
        id: 4,
        title: "Ciudad Escondida",
        price: 599,
      },
      {
        id: 5,
        title: "Selva Amazonica",
        price: 899,
      }
      
    ];
  
    return new Response(JSON.stringify(tours), {
      headers: { 'Content-Type': 'application/json' },
    });
} 
