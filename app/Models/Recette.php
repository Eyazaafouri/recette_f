<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recette extends Model
{
    use HasFactory;

    protected $fillable = [
        'titre', 
        'image', 
        'categorie_id', 
        'sous_categorie_id', 
        'ingredients', 
        'methode_preparation', 
        'informations_complementaire'
    ];

    public function categorie()
    {
        return $this->belongsTo(Categorie::class);
    }

    public function sousCategorie()
    {
        return $this->belongsTo(SousCategorie::class);
    }
}
