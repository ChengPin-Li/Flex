﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace FlexCoreService.Models.EFModels
{
    public partial class SpeakerField
    {
        public SpeakerField()
        {
            Speakers = new HashSet<Speaker>();
        }

        public int FieldId { get; set; }
        public string FieldName { get; set; }

        public virtual ICollection<Speaker> Speakers { get; set; }
    }
}