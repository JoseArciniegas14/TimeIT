const Habit = require("../models/habits.model")

async function createHabit(req, res) {
  try {
    const userId = req.user.userId
    const { title } = req.body

    const habit = await Habit.create({ userId, title })

    const filteredHabit = {
      id: habit._id,
      title
    }

    res.status(200).json(filteredHabit)
  } catch (error) {
    res.status(500).send({ msg: "Error al crear el hábito" })
  }
}

async function updateHabit(req, res) {
  try {
    const userId = req.user.userId
    const { habitId, title } = req.body

    const updateHabit = await Habit.findByIdAndUpdate(
      { _id: habitId, userid: userId },
      { title },
      { new: true }
    )

    if (!updateHabit) {
      return res.status(404).send({ msg: "Habito no encontrado" })
    }

    const filteredInfo = {
      habitId,
      title
    }

    res.status(200).json(filteredInfo)
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Error al actualizar el habito" })
  }
}

async function deleteHabit(req, res) {
  try {
    const userId = req.user.userId
    const { habitsIds } = req.body

    if (!Array.isArray(habitsIds)) {
      return res.status(400).send({ msg: "La lista de Ids de habitos no es valida" });
    }

    const result = await Habit.deleteMany({ userid: userId, _id: { $in: habitsIds } })

    if (result.deletedCount > 0) {
      return res.status(200).send({ msg: "habitos eliminadas correctamente" });
    } else {
      return res.status(404).send({ msg: "No se encontraron habitos" });
    }

  } catch (error) {
    res.status(500).send({ msg: "Error al eliminar habitos" });
  }
}

async function getAllHabits(req, res) {
  try {
    const userId = req.user.userId;
    const habits = await Habit.find({ userid: userId });

    if (habits.length > 0) {
      const modifiedHabits = habits.map(habit => {
        return {
          _id: habit._id,
          title: habit.title,
          completionPercentage: habit.completionPercentage,
        };
      });

      return res.status(200).json(modifiedHabits);
    } else {
      return res.status(404).send({ msg: "El usuario no tiene hábitos asociados" });
    }
  } catch (error) {
    return res.status(500).send({ msg: "Error al obtener los hábitos del usuario" });
  }
}

// TAREAS DENTRO DE UN HABITO

async function createTask(req, res) {
  try {
    const { habitId, taskDescription, completed } = req.body
    const habit = await Habit.findById(habitId)

    if (!habit) {
      return res.status(404).send({ msg: "Hábito no encontrado" })
    }

    if (habit.taskCount >= 20) {
      return res.status(400).send({ msg: "Se ha alcanzado el límite de tareas para este hábito" })
    }

    const newTask = {
      description: taskDescription,
      completed: completed || false
    };

    habit.tasks.push(newTask)
    habit.taskCount += 1
    await habit.save()

    updatePercentage(habit)

    const newTaskId = habit.tasks[habit.tasks.length - 1]._id;

    const filteredTask = {
      _id: newTaskId,
      description: newTask.description,
      completed: newTask.completed,
    };

    res.json(filteredTask)
  } catch (error) {
    console.error(error)
    res.status(500).send({ msg: "Error al crear la tarea" })
  }
}

async function updateTask(req, res) {
  try {
    const { habitId, taskId, taskDescription, completed } = req.body;
    const habit = await Habit.findById(habitId);

    if (!habit) {
      return res.status(404).send({ msg: "Hábito no encontrado" });
    }

    const taskToUpdate = habit.tasks.id(taskId);

    if (!taskToUpdate) {
      return res.status(404).send({ msg: "Tarea no encontrada" });
    }


    taskToUpdate.description = taskDescription;
    taskToUpdate.completed = completed;


    habit.markModified('tasks');


    const updatedHabit = await habit.save();

    updatePercentage(updatedHabit);


    const filteredTask = {
      description: taskToUpdate.description,
      completed: taskToUpdate.completed,
    };

    res.status(200).json(filteredTask);
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: "Error al actualizar la tarea" });
  }
}

async function deleteTask(req, res) {
  try {
    const userId = req.user.userId
    const { taskIds } = req.body

    if (!Array.isArray(taskIds)) {
      return res.status(400).send({ msg: "La lista de Ids de tareas no es valida" });
    }

    const result = await Habit.deleteMany({ userid: userId, _id: { $in: taskIds } })

    if (result.deletedCount > 0) {
      return res.status(200).send({ msg: "Tareas eliminadas correctamente" });
    } else {
      return res.status(404).send({ msg: "No se encontraron tareas" });
    }

  } catch (error) {
    res.status(500).send({ msg: "Error al eliminar tareas" });
  }
}

function updatePercentage(habit) {
  const completedTasks = habit.tasks.filter((task) => task.completed).length
  habit.completionPercentage = (completedTasks / habit.tasks.length) * 100;
  return habit.save()
}

module.exports = {
  createHabit,
  deleteHabit,
  updateHabit,
  getAllHabits,
  createTask,
  updateTask,
  deleteTask,
};
