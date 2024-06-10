import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { FoodItem } from '../types/FoodItem';
interface FoodItemCardProps {
  item: FoodItem;
  onDelete: (id: number) => void;
  onEdit: (item: FoodItem) => void;
}

const FoodItemCard: React.FC<FoodItemCardProps> = ({
  item,
  onDelete,
  onEdit,
}) => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => setShowMore(!showMore);

  return (
    <Card className="flex flex-col rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <CardMedia
        component="img"
        alt={item.name}
        height="200"
        image={item.img}
        title={item.name}
        className="object-cover h-48 w-full"
      />
      <CardContent className="flex flex-col flex-grow">
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="font-semibold"
          color="primary"
          fontWeight={'bold'}
        >
          {item.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className="flex-grow"
        >
          {showMore
            ? item.description
            : `${item.description.substring(0, 100)}...`}
        </Typography>
        {item.description.length > 100 && (
          <Button
            size="small"
            onClick={handleShowMore}
            style={{ textTransform: 'none', alignSelf: 'flex-end' }}
          >
            {showMore ? 'less' : 'more'}
          </Button>
        )}
        <Typography variant="h6" color="text.primary" className="mt-2">
          ${item.price.toFixed(2)}
        </Typography>
      </CardContent>
      <CardActions className="flex justify-between p-2">
        <button
          className="px-2 py-1 text-sm bg-white text-black rounded-md border border-black hover:bg-gray-200 transition-colors duration-300"
          onClick={() => onEdit(item)}
        >
          Edit
        </button>
        <button
          className="px-2 py-1 text-sm bg-white text-black rounded-md border border-black hover:bg-gray-200 transition-colors duration-300"
          onClick={() => onDelete(item.id)}
        >
          Delete
        </button>
      </CardActions>
    </Card>
  );
};

export default FoodItemCard;
