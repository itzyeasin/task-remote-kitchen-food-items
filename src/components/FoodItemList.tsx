import React, { useState } from 'react';
import FoodItemCard from './FoodItemCard';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FoodItem } from '../types/FoodItem';

import foodData from '../data/foodData.json';

const FoodItemList: React.FC = () => {
  const [items, setItems] = useState<FoodItem[]>(foodData);
  const [open, setOpen] = useState(false);
  const [newItem, setNewItem] = useState<FoodItem>({
    id: 0,
    name: '',
    description: '',
    price: 0,
    img: '',
  });
  const [editMode, setEditMode] = useState(false);

  const handleAddItem = () => {
    setNewItem({
      id: items.length + 1,
      name: '',
      description: '',
      price: 0,
      img: '',
    });
    setEditMode(false);
    setOpen(true);
  };

  const handleEditItem = (item: FoodItem) => {
    setNewItem(item);
    setEditMode(true);
    setOpen(true);
  };

  const handleSaveItem = () => {
    if (editMode) {
      setItems(items.map((item) => (item.id === newItem.id ? newItem : item)));
    } else {
      setItems([...items, newItem]);
    }
    setOpen(false);
  };

  const handleDeleteItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Food Items</h1>
        <Button variant="contained" color="primary" onClick={handleAddItem}>
          Add New Item
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {items.map((item) => (
          <FoodItemCard
            key={item.id}
            item={item}
            onDelete={handleDeleteItem}
            onEdit={handleEditItem}
          />
        ))}
      </div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{editMode ? 'Edit Item' : 'Add New Item'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {editMode
              ? 'Edit the details of the item.'
              : 'Enter the details of the new item.'}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            variant="outlined"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Description"
            type="text"
            fullWidth
            variant="outlined"
            value={newItem.description}
            onChange={(e) =>
              setNewItem({ ...newItem, description: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Price"
            type="number"
            fullWidth
            variant="outlined"
            value={newItem.price}
            onChange={(e) =>
              setNewItem({ ...newItem, price: Number(e.target.value) })
            }
          />
          <TextField
            margin="dense"
            label="Image URL"
            type="text"
            fullWidth
            variant="outlined"
            value={newItem.img}
            onChange={(e) => setNewItem({ ...newItem, img: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSaveItem} color="primary">
            {editMode ? 'Save' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FoodItemList;
